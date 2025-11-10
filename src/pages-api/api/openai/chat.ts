// src/pages-api/api/openai/chat.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseServerAdmin } from "@/lib/supabase";
import { chatWithAI } from "@/lib/openai.server";
import { encrypt } from "@/lib/encrypt";
import { z } from "zod";

const BodySchema = z.object({
  conversationId: z.number().optional(),
  messages: z.array(z.object({ role: z.string(), content: z.string() })),
  roleTemplate: z.string().optional()
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  try {
    const body = BodySchema.parse(req.body);
    const user = req.headers["x-user-id"] as string | undefined; // 如果你用 auth headers
    // call AI
    const reply = await chatWithAI({ messages: body.messages, roleTemplate: body.roleTemplate || "You are a supportive companion.", userId: user });
    // save message to DB (encrypt)
    const convId = body.conversationId ?? null;
    if (convId) {
      await supabaseServerAdmin.from("messages").insert([
        {
          conversation_id: convId,
          sender_id: null, // assistant system
          role: "assistant",
          body: encrypt(reply)
        }
      ]);
    }
    res.status(200).json({ reply });
  } catch (err: any) {
    if (err.message === "CRISIS_DETECTED") {
      return res.status(422).json({ error: "CRISIS_DETECTED", resources: { us: "988" } });
    }
    if (err.message === "RATE_LIMIT_EXCEEDED") {
      return res.status(429).json({ error: "RATE_LIMIT_EXCEEDED" });
    }
    console.error(err);
    res.status(500).json({ error: "internal_error" });
  }
}

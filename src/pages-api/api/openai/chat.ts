// src/pages-api/api/openai/chat.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/lib/supabase";
import { chatWithAI } from "@/lib/openai.server";
import { encrypt } from "@/lib/encrypt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const { conversationId, messages, roleTemplate } = req.body;
    // optional user id header set by client auth middleware
    const userId = req.headers["x-user-id"] as string | undefined;
    const reply = await chatWithAI({ messages, systemPrompt: roleTemplate, userId });
    if (conversationId) {
      await supabaseAdmin.from("messages").insert({
        conversation_id: conversationId,
        sender_id: null,
        role: "assistant",
        body: encrypt(reply)
      });
    }
    res.status(200).json({ reply });
  } catch (err: any) {
    if (err.message === "CRISIS_DETECTED") return res.status(422).json({ error: "CRISIS_DETECTED", resources: { us: "988" } });
    if (err.message === "RATE_LIMIT_EXCEEDED") return res.status(429).json({ error: "RATE_LIMIT_EXCEEDED" });
    console.error(err);
    res.status(500).json({ error: "internal_error" });
  }
}
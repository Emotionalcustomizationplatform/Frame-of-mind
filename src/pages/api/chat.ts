import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { chat_id } = req.query;
    const { data, error } = await supabase
      .from("chat_messages")
      .select("*")
      .eq("chat_id", chat_id)
      .order("created_at", { ascending: true });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { chat_id, sender, message } = req.body;
    const { data, error } = await supabase
      .from("chat_messages")
      .insert([{ chat_id, sender, message }])
      .select();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data[0]);
  }

  res.status(405).end();
}

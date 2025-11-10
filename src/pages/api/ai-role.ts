import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { user_id, name, gender, personality, instructions } = req.body;

  const { data, error } = await supabase
    .from("ai_custom_roles")
    .insert([{ user_id, name, gender, personality, instructions }])
    .select();

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data[0]);
}

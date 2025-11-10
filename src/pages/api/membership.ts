import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  const { user_id } = req.query;
  const { data, error } = await supabase
    .from("profiles")
    .select("membership_end")
    .eq("id", user_id)
    .single();

  if (error) return res.status(500).json({ error: error.message });
  const now = new Date();
  const valid = data.membership_end && new Date(data.membership_end) > now;
  res.status(200).json({ isMember: valid });
}

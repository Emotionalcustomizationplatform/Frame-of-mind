import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  // Stripe / PayPal / 微信 回调解析
  const { user_id, service_type, status } = req.body;

  if (status === "completed") {
    await supabase.from("profiles")
      .update({ membership_end: new Date(Date.now() + 7*24*60*60*1000) }) // 一周
      .eq("id", user_id);

    await supabase.from("payments")
      .insert([{ user_id, service_type, method: "stripe/paypal/wechat", amount: 99, status }]);
  }

  res.status(200).json({ ok: true });
}

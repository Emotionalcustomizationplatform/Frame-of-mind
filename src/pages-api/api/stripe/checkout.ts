import type { NextApiRequest, NextApiResponse } from "next";
import stripe from "@/lib/stripe.server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  const { customerEmail } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "EmoVibe Weekly Membership" },
            recurring: { interval: "week" },
            unit_amount: 9900 // $99.00
          },
          quantity: 1
        }
      ],
      customer_email: customerEmail,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/?checkout=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/?checkout=cancel`
    });
    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "stripe_error" });
  }
}

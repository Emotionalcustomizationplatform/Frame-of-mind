import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";
import { supabaseServerAdmin } from "@/lib/supabase";

export const config = { api: { bodyParser: false } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-11-19" });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sig = req.headers["stripe-signature"]!;
  const raw = await buffer(req);
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw.toString(), sig as string, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Webhook signature verification failed.", err);
    return res.status(400).send(`Webhook Error: ${err}`);
  }

  switch (event.type) {
    case "checkout.session.completed":
      {
        const session = event.data.object as Stripe.Checkout.Session;
        // save subscription (if subscription present)
        if (session.subscription && session.customer_email) {
          const subscriptionId = session.subscription.toString();
          // find user by email in profiles (or create)
          const { data: profile } = await supabaseServerAdmin.from("profiles").select("id").eq("email", session.customer_email).single();
          if (profile) {
            await supabaseServerAdmin.from("subscriptions").insert({
              user_id: profile.id,
              stripe_subscription_id: subscriptionId,
              status: "active",
              current_period_end: new Date() // you can fetch proper period via stripe.subscriptions.retrieve
            });
          }
        }
      }
      break;
    case "invoice.payment_failed":
      // handle failed payment
      break;
    default:
      break;
  }

  res.json({ received: true });
}

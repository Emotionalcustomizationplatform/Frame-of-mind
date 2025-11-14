// src/pages/api/auth/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('Missing Supabase env for admin operations.');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only POST
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  try {
    // Create user via Supabase Admin REST endpoint
    // POST /auth/v1/admin/users
    const url = `${SUPABASE_URL}/auth/v1/admin/users`;
    const body = {
      email,
      password,
      // optional: email_confirm: true,
      // optional: user_metadata: { ... }
    };

    const r = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const data = await r.json();

    if (!r.ok) {
      // Supabase admin may return 4xx/5xx with JSON error details
      return res.status(r.status).json({ error: data?.message || data });
    }

    // Created user object returned
    return res.status(200).json({ user: data });
  } catch (err: any) {
    console.error('signup error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

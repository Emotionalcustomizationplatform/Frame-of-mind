// src/pages/api/auth/signin.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  try {
    // Supabase token endpoint (password grant)
    // POST /auth/v1/token with form body grant_type=password
    const url = `${SUPABASE_URL}/auth/v1/token`;
    const form = new URLSearchParams();
    form.append('grant_type', 'password');
    form.append('email', email);
    form.append('password', password);

    const r = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        apikey: ANON_KEY,
      },
      body: form.toString(),
    });

    const data = await r.json();

    if (!r.ok) {
      // data might include error_description
      return res.status(r.status).json({ error: data?.error_description || data?.error || data });
    }

    // returns access_token, refresh_token, expires_in, token_type, user
    return res.status(200).json(data);
  } catch (err: any) {
    console.error('signin error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

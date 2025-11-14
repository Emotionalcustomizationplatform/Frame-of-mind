// src/pages/api/auth/user.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // GET only
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Authorization header required' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Bearer token required' });

  try {
    const url = `${SUPABASE_URL}/auth/v1/user`;
    const r = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        apikey: ANON_KEY,
      },
    });

    const data = await r.json();
    if (!r.ok) return res.status(r.status).json({ error: data });
    return res.status(200).json(data);
  } catch (err: any) {
    console.error('get user error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

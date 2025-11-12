import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { roleName, description } = req.body;

  if (!roleName || !description) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const { data, error } = await supabase
    .from('ai_roles')
    .insert({ role_name: roleName, description });

  if (error) return res.status(500).json({ message: error.message });

  res.status(200).json({ message: 'Role saved', data });
}
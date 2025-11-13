import { createClient } from '@supabase/supabase-js'

// 从环境变量中读取 Supabase 信息
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
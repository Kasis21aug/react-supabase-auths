import { createClient } from "@supabase/supabase-js"; 
// createClient is a function given by Supabase (It helps us connect our frontend to Supabase servers)


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
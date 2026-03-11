import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ygicvhsjznpeifqbxoxg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnaWN2aHNqem5wZWlmcWJ4eG9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxODMyNjMsImV4cCI6MjA4ODc1OTI2M30.kEdRpHuWl8bab8_9zgQ0lRd40Tjj4lCTJP1rEQraKMQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

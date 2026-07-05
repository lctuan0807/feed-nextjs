"use server";

import { createClient } from "@/lib/supabase/server";

interface SignUpData {
  email: string;
  password: string;
  name: string;
}

export async function signup({ email, password, name }: SignUpData) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
    },
  });

  console.log("Console Logging ~~ ~ signup ~ error:", error);
  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
  };
}

"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

interface LoginData {
  email: string;
  password: string;
}

export async function login(formData: LoginData) {
  const supabase = await createClient();

  const email = formData.email;
  const password = formData.password;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
  };
}

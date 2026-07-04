"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { syncUser } from "@/services/auth/sync-user";

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

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      error: userError?.message || "User not found",
    };
  }

  await syncUser(user);

  return {
    success: true,
  };
}

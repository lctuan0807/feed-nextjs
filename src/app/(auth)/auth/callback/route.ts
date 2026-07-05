import { createClient } from "@/lib/supabase/server";
import { syncUser } from "@/features/auth/services/sync-user.service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);

  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${origin}/login`);
  }

  const supabase = await createClient();

  await supabase.auth.exchangeCodeForSession(code);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    await syncUser(user);
  }

  return NextResponse.redirect(`${origin}/`);
}

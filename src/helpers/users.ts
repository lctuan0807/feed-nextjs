import { createClient } from "@/lib/supabase/server";
import { syncUser } from "@/services/auth/sync-user";

export default async function getCurrentUser() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  return syncUser(user);
}

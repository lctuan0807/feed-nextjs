import { prisma } from "@/lib/prisma";
import { User } from "@supabase/supabase-js";

export async function syncUser(user: User) {
  return prisma.user.upsert({
    where: {
      authId: user.id,
    },

    update: {
      email: user.email!,
      name: user.user_metadata.name,
    },

    create: {
      authId: user.id,
      email: user.email!,
      name: user.user_metadata.name,
    },
  });
}

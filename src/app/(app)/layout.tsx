import { ReactNode } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { requireUser } from "@/features/auth/services/auth.service";
import { CurrentUserProvider } from "@/providers/current-user-provider";

export default async function Layout({ children }: { children: ReactNode }) {
  const user = await requireUser();
  console.log("Console Logging ~~ ~ Layout ~ user:", user);

  return (
    <CurrentUserProvider user={user}>
      <AppShell>{children}</AppShell>
    </CurrentUserProvider>
  );
}

import { ReactNode } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { requireUser } from "@/features/auth/services/auth.service";

export default async function Layout({ children }: { children: ReactNode }) {
  const user = await requireUser();

  return <AppShell user={user}>{children}</AppShell>;
}

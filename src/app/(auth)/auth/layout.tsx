import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { getCurrentUser } from "@/features/auth/services/auth.service";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-100">
      {children}
    </main>
  );
}

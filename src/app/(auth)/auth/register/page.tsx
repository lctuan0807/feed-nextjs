import { redirect } from "next/navigation";
import RegisterForm from "@/features/auth/components/register.form";

import { getCurrentUser } from "@/features/auth/services/auth.service";

export default async function LoginPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/feed");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30">
      <RegisterForm />
    </div>
  );
}

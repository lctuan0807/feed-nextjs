import { redirect } from "next/navigation";
import RegisterForm from "@/features/auth/components/register.form";

import { getCurrentUser } from "@/features/auth/services/auth.service";

export default async function RegisterPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <span className="text-2xl font-bold text-center">Register account</span>
      <RegisterForm />
    </div>
  );
}

import { redirect } from "next/navigation";
import LoginForm from "@/features/auth/components/login.form";
import { getCurrentUser } from "@/features/auth/services/auth.service";

export default async function LoginPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <span className="text-2xl font-bold text-center">
        Login to your account
      </span>
      <LoginForm />
    </div>
  );
}

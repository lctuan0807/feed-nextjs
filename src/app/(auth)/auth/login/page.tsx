import { redirect } from "next/navigation";
import LoginForm from "@/features/auth/components/login.form";
import { getCurrentUser } from "@/features/auth/services/auth.service";

export default async function LoginPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/feed");
  }

  return (
    <div className="flex min-h-dvh items-center justify-center">
      <LoginForm />
    </div>
  );
}

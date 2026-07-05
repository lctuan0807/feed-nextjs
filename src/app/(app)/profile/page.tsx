"use client";
import { useCurrentUser } from "@/providers/current-user-provider";

export default function ProfilePage() {
  const user = useCurrentUser();
  return (
    <>
      <div className="sticky top-0 p-4">
        <h1 className="text-xl font-semibold">{user?.name}</h1>
      </div>
      <div className="min-h-screen w-full rounded-2xl border">
        <div className="">{user?.name}</div>
      </div>
    </>
  );
}

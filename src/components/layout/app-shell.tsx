import { ReactNode } from "react";

import { Sidebar } from "./sidebar";

type Props = {
  children: ReactNode;

  user: {
    name: string | null;
    email: string;
  };
};

export function AppShell({ children, user }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex">
        <Sidebar user={user} />

        <main className="min-h-screen w-full max-w-160 rounded-2xl border">
          {children}
        </main>
      </div>
    </div>
  );
}

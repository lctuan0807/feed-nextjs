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
    <div className="flex">
      <Sidebar user={user} />
      <div className="min-h-screen bg-white mx-auto container">
        <div className="min-h-screen max-w-3xl mx-auto">{children}</div>
      </div>
    </div>
  );
}

import { ReactNode, Suspense } from "react";

import { Sidebar } from "./sidebar";

type Props = {
  children: ReactNode;
};

export function AppShell({ children }: Props) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="min-h-screen mx-auto container">
        <div className="min-h-screen max-w-3xl mx-auto">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}

import { navigation } from "@/config/navigation";

import { SidebarItem } from "./sidebar-item";
import { Logo } from "./logo";
import { UserMenu } from "./user-menu";

type Props = {
  user: {
    name: string | null;
    email: string;
  };
};

export function Sidebar({ user }: Props) {
  return (
    <aside className="sticky top-0 flex h-screen w-64 flex-col border-r bg-white">
      <div className="p-6">
        <Logo />
      </div>

      <nav className="space-y-1 px-3">
        {navigation.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </nav>

      <div className="mt-auto">
        <UserMenu user={user} />
      </div>
    </aside>
  );
}

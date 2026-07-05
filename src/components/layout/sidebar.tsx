import { navigation } from "@/config/navigation";

import { SidebarItem } from "./sidebar-item";
import { Logo } from "./logo";
import { MoreMenu } from "../sidebar/more-menu";

export function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-64 flex-col border-r">
      <div className="p-6">
        <Logo />
      </div>

      <nav className="space-y-1 px-3">
        {navigation.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </nav>

      <div className="mt-auto p-4 w-full">
        <MoreMenu />
      </div>
    </aside>
  );
}

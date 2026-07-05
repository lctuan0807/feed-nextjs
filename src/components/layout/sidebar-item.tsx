"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { House, Search, SquarePen, User } from "lucide-react";

const icons = {
  house: House,
  search: Search,
  "square-pen": SquarePen,
  user: User,
};

type SidebarItemProps = {
  href: string;
  title: string;
  icon: string;
};

export function SidebarItem({ href, title, icon }: SidebarItemProps) {
  const pathname = usePathname();

  const active = pathname === href;

  const Icon = icons[icon as keyof typeof icons];

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 rounded-xl px-4 py-3 transition",
        active ? "bg-neutral-100 font-semibold" : "hover:bg-neutral-100",
      )}
    >
      <Icon size={20} />

      <span>{title}</span>
    </Link>
  );
}

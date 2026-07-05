"use client";

import { Menu } from "lucide-react";
import { useTransition } from "react";

import { logout } from "@/features/auth/actions/logout";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppearanceMenu } from "./appearance-menu";

export function MoreMenu() {
  const [pending, startTransition] = useTransition();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <div className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-muted cursor-pointer">
          <Menu className="size-5" />

          <span className="font-medium">More</span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        side="top"
        className="w-72 rounded-3xl p-2"
      >
        <AppearanceMenu />

        <DropdownMenuSeparator />

        <DropdownMenuItem
          disabled={pending}
          className="h-8 cursor-pointer rounded-xl text-red-500 focus:text-red-500"
          onClick={() =>
            startTransition(async () => {
              await logout();
            })
          }
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

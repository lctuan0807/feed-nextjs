"use client";

import { createContext, useContext, type ReactNode } from "react";

export type CurrentUser = {
  id: number;
  authId: string;
  name: string | null;
  avatarUrl: string | null;
};

const CurrentUserContext = createContext<CurrentUser | null>(null);

type Props = {
  user: CurrentUser;
  children: ReactNode;
};

export function CurrentUserProvider({ user, children }: Props) {
  return (
    <CurrentUserContext.Provider value={user}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export function useCurrentUser() {
  const context = useContext(CurrentUserContext);

  if (!context) {
    throw new Error("useCurrentUser must be used within CurrentUserProvider");
  }

  return context;
}

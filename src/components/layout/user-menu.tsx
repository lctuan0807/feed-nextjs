import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Props = {
  user: {
    name: string | null;
    email: string;
  };
};

export function UserMenu({ user }: Props) {
  return (
    <div className="border-t p-4">
      <div className="flex items-center gap-3">
        {/* <Avatar>
          <AvatarFallback>{user.name?.charAt(0) ?? "U"}</AvatarFallback>
        </Avatar> */}

        <div>
          <p className="font-medium">{user.name ?? "Anonymous"}</p>

          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>
      </div>
    </div>
  );
}

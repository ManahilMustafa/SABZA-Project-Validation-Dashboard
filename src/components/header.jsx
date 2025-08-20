import { Button } from "@/components/ui/button"; // custom button
import { useAuth0 } from "@auth0/auth0-react";
import { User, LogOut } from "lucide-react"; // icons
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"; // if using shadcn/ui

export function Header() {
  const { user, logout } = useAuth0();

  const getUserInitials = (user) => {
    if (user?.name) {
      return user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return "AD";
  };

  const getDisplayName = (user) => {
    return (
      user?.name || user?.nickname || user?.email?.split("@")[0] || "Admin User"
    );
  };

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <img src="/logo.jpg" alt="SABZA Logo" className="h-16 w-19" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {user?.picture ? (
            <img
              src={user.picture}
              alt={getDisplayName(user)}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white text-sm font-medium">
              {getUserInitials(user)}
            </div>
          )}

          {/* Dropdown with Logout */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                {getDisplayName(user)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer text-red-600" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

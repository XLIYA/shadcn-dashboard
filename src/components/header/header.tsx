import { Bell, ChevronDown, GraduationCap, Search, Sun } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Switch } from "../ui/switch";
import { SidebarTrigger } from "../ui/sidebar";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex h-16 items-center justify-between border-b bg-gray-50 p-4">

      <div className=" flex gap-2 font-bold">
        <GraduationCap className="text-violet-800" />
        EduBoard
        
        <SidebarTrigger />
      </div>


      <div className="relative w-96 flex items-center">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

        <Input type="search" placeholder="Search..." className="pl-10 pr-16" />

        <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 hidden h-5 items-center gap-1 rounded border bg-muted px-1.5 text-[10px] text-muted-foreground sm:flex">
          Ctrl K
        </kbd>
      </div>

      <div className="flex items-center gap-8">
        {/* Notification */}
        <div className="relative">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          <div className="absolute text-white text-[11px] -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center border bg-violet-700">
            3
          </div>
        </div>

        {/* Theme Switch */}
        <div className="flex items-center gap-2 rounded-full bg-gray-100 px-2 py-1">
          <Sun className="h-4 w-4 text-yellow-500" />
          <Switch />
        </div>

        {/* User */}
        <Button
          variant="ghost"
          className="flex h-auto items-center gap-3 px-2 py-1"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src="/avatar.jpg" />
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>

          <div className="text-left leading-tight">
            <p className="font-semibold text-sm">Ali Ahmadi</p>
            <p className="text-xs text-muted-foreground">Student</p>
          </div>

          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>
    </header>
  );
}

export default Header;

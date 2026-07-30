import { Badge } from "@/components/ui/badge"
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,

  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { BookOpen, Calendar, Contact, House, MessageCircle, NotepadText, Settings } from "lucide-react";


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu className="p-2.5 flex flex-col gap-2">
          <SidebarMenuItem className="flex gap-2 p-2 items-center rounded-md hover:bg-gray-200 hover:text-violet-700  cursor-pointer ">
          <House className="size-4 "/>Dashboard
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 p-2 items-center rounded-md hover:bg-gray-200 hover:text-violet-700  cursor-pointer ">
          <BookOpen className="size-4" />Courses
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 p-2 items-center rounded-md hover:bg-gray-200 hover:text-violet-700  cursor-pointer ">
          <NotepadText className="size-4" /> Assignments
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 p-2 items-center rounded-md hover:bg-gray-200 hover:text-violet-700  cursor-pointer ">
          <Calendar className="size-4" /> Calendar
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 p-2 items-center rounded-md hover:bg-gray-200 hover:text-violet-700  cursor-pointer ">
          <MessageCircle className="size-4" />Messages <Badge className=" ml-auto size-8 bg-violet-100 text-violet-700  text-sm" variant="secondary">5</Badge>
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 p-2 items-center rounded-md hover:bg-gray-200 hover:text-violet-700  cursor-pointer ">
          <Contact className="size-4"/>Community
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 p-2 items-center rounded-md hover:bg-gray-200 hover:text-violet-700  cursor-pointer ">
          <Settings className="size-4" />Settings
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
    </Sidebar>
  );
}

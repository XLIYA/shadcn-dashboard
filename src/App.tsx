import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/ui/app-sidebar";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <SidebarProvider className="[&_[data-slot=sidebar-container]]:top-16 [&_[data-slot=sidebar-container]]:h-[calc(100svh-4rem)]">
      <Header />
      <AppSidebar />

      <SidebarInset className="mt-16">
        <div className="p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
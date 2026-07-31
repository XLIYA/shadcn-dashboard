import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/ui/app-sidebar";
import Header from "./components/header/header";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {

  return (
    <>
      <div className="flex flex-col ">
        <main>
          <SidebarProvider className="[&_[data-slot=sidebar-container]]:top-16 [&_[data-slot=sidebar-container]]:h-[calc(100svh-4rem)]">
            <Header />
            <AppSidebar />
            <RouterProvider router={router} />
          </SidebarProvider>
        </main>
      </div>
    </>
  );
}

export default App;

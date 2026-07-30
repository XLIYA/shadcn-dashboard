import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/ui/app-sidebar";
import Header from "./components/header/header";


function App() {
  return (
    <>
      <div className="flex flex-col ">
        <Header/>
        <SidebarProvider className=" [&_[data-slot=sidebar-container]]:inset-y-16 ">
          <AppSidebar />

          <main>
            <SidebarTrigger />
          </main>
        </SidebarProvider>
      </div>
    </>
  );
}

export default App;

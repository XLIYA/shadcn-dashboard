import App from "@/App";
import CalendarPage from "@/pages/Calendar";
import { Dashboard } from "@/pages/dashboard";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path:"/Calendar",
        index: true,
        Component: CalendarPage,
      },
    ],
  },
]);

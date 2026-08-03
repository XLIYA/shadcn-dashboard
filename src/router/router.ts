import App from "@/App";
import { Dashboard } from "@/pages/dashboard";
import { createBrowserRouter } from "react-router-dom";
import {CalendarPage} from "../pages/calendar"
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
        index: true,
        Component: CalendarPage,
      },
    ],
  },
]);

import App from "@/App";
import CalendarPage from "@/pages/Calendar";
import Community from "@/pages/Community";
import Course from "@/pages/Course";
import { Dashboard } from "@/pages/dashboard";
import Messages from "@/pages/Messages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Dashboard },
      { path: "Calendar", Component: CalendarPage },
      { path: "Course", Component: Course },
      { path: "Messages", Component: Messages },
      { path: "Community", Component: Community },
    ],
  },
]);
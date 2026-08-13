import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryClinet= new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={QueryClinet}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);

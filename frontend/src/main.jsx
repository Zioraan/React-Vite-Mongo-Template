import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { StoreProvider } from "./hooks/useGlobalReducer";
import { router } from "./Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider router={router}></RouterProvider>
    </StoreProvider>
  </StrictMode>
);

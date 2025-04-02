// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import { router } from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  // Só pra teste, renderiza 2 vezes
  // <StrictMode>
  // <App />
  // </StrictMode>
  <RouterProvider router={router} />
);

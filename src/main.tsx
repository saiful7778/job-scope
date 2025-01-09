import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "@/routes/routes";
import "@/assets/css/style.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ThemeProvider from "@/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              className: "hot-toast-container",
              duration: 5000,
              removeDelay: 1000,
            }}
          />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);

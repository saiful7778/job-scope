import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/login",
        element: (
          <AuthLayout>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/register",
        element: (
          <AuthLayout>
            <Register />
          </AuthLayout>
        ),
      },
    ],
  },
]);

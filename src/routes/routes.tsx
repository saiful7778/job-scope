import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";
import PrivateProtector from "./protectors/PrivateProtector";
import AuthProtector from "./protectors/AuthProtector";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PrivateProtector>
            <Home />
          </PrivateProtector>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthProtector>
            <AuthLayout>
              <Login />
            </AuthLayout>
          </AuthProtector>
        ),
      },
      {
        path: "/register",
        element: (
          <AuthProtector>
            <AuthLayout>
              <Register />
            </AuthLayout>
          </AuthProtector>
        ),
      },
    ],
  },
]);

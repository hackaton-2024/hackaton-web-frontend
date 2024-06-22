// Router.js
import { Navigate, useRoutes, Outlet } from "react-router-dom";
import GuestGuard from "../auth/GuestGuard";
import AuthGuard from "../auth/AuthGuard"
import { LoginPage } from "./elements";
import RedirectOnAuth from "../pages/RedirectOnAuth";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { element: <RedirectOnAuth />, index: true },
        {
          path: "login",
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <AuthGuard>
              <Outlet />
            </AuthGuard>
          ),
        }
      ],
    },
  ]);
}

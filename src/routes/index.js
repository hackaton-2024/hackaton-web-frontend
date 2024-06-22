// Router.js
import { Navigate, useRoutes } from "react-router-dom";
import GuestGuard from "../auth/GuestGuard";
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
      ],
    },
  ]);
}

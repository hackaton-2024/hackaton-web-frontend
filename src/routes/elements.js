import { Suspense, lazy } from "react";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <>
          <LoadingScreen />
        </>
      }
    >
      <Component {...props} />
    </Suspense>
  );

export const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")));

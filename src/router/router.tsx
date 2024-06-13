/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { PublicRouterOutlet } from "./Publicroutes";
import { PublicLayout } from "../layout/public/publicLayout";
import { lazyImport } from "../utils/lazyImport";

const Homepage = React.lazy(() => import("../page/home/Homepage"));
const { Signinpage } = lazyImport(
  () => import("../page/auth/Signinpage"),
  "Signinpage"
);
const { SignUppage } = lazyImport(
  () => import("../page/auth/SignUppage"),
  "SignUppage"
);

export const RouterConfig = () => {
  return (
    <Router>
      {/* Public Router */}
      <Routes>
        <Route
          path="/"
          element={
            <PublicRouterOutlet
              // {...defaultPublicRouteProps}
              outlet={<PublicLayout />}
            />
          }
        >
          <Route index element={<Homepage />} />
        </Route>
        <Route path="signin" element={<Signinpage />} />
        <Route path="signup" element={<SignUppage />} />
      </Routes>
    </Router>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const defaultPrivateRouteProps: Omit<any, "outlet"> = {
  authenticationPath: "/signin",
};

// eslint-disable-next-line react-refresh/only-export-components
export const defaultPublicRouteProps: Omit<any, "outlet"> = {
  authenticationPath: "/",
};

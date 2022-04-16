import { lazy } from "react";

// App Pages
const HomePage = lazy(() => import("../views/home/home-page"));

const Routes = {
  HOME: "/",
};

export const routes = {
  app: [
    {
      path: Routes.HOME,
      title: "Home",
      component: HomePage,
    },
  ],
};

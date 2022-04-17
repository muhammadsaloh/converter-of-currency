import { lazy } from "react";

// App Pages
const HomePage = lazy(() => import("../views/home/home-page"));
const CurrencyPage = lazy(() => import("../views/currency/currency-page"));

const Routes = {
  HOME: "/",
  CURRENCY_PAGE: "/currency-page",
};

export const routes = {
  app: [
    {
      path: Routes.HOME,
      title: "Home",
      component: HomePage,
    },
    {
      path: Routes.CURRENCY_PAGE,
      title: "Currency Page",
      component: CurrencyPage,
    },
  ],
};

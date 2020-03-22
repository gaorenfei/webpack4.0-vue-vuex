function loadView(view) {
  return () => import(/* webpackChunkName: "[request]" */ `@/pages/${view}`);
}

const defaultRoutes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/home",
    component: loadView("home"),
    hidden: true
  },
  {
    path: "/login",
    component: loadView("login"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/pages/404"),
    hidden: true
  }
];

export default defaultRoutes;

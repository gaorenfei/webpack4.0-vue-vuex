function loadView(view:string):object {
  return () => import(/* webpackChunkName: "[request]" */ `@/pages/${view}`);
}

const defaultRoutes:Array<object> = [
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
    component: () => loadView("404"),
    hidden: true
  }
];

export default defaultRoutes;

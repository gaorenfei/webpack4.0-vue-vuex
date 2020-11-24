function loadView(view){
  return () => import(/* webpackChunkName: "[request]" */ `@/pages/${view}.vue`);
}

const defaultRoutes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: loadView("login"),
    hidden: true
  },
  // {
  //   path: "/home",
  //   component: loadView("home"),
  //   hidden: true
  // },
  // {
  //   path: "/404",
  //   component: () => loadView("404"),
  //   hidden: true
  // }
];

export default defaultRoutes;

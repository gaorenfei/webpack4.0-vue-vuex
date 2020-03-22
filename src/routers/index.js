import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store";
import routes from "routers/routers";
Vue.use(VueRouter);

const createRouter = () =>
  new VueRouter({
    mode: "hash",
    routes
  });

const router = createRouter();

// 路由拦截
// const whiteList = ["/login"]; // no redirect whitelist
router.onError(error => {
  console.log(error, "错误了哦!!!");
});

// router.beforeEach(async (to, from, next) => {
//   if (to.path === "/invite-more") {
//     next();
//   }
//   const hasToken = getToken();
//   if (hasToken) {
//     try {
//       const res = await fetchLoginInfo();
//       if (res.userName) {
//         next("/invite-more");
//       } else {
//         next();
//       }
//     } catch (e) {
//       next();
//     }
//   } else {
//     next();
//   }
// });

router.afterEach(to => {
  console.log("router after");
  console.log(to);
});

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // matcher替换路由默认的match匹配方法
}

export default router;
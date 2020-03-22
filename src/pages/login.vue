<template>
  <div class="login">
    <p @click="login">{{ message }}</p>
    <p @click="logout">{{ account }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      message: "登录"
    };
  },
  methods: {
    ...mapActions({
      go_login: "login/go_login",
      go_logout: "login/go_logout"
    }),
    login() {
      this.go_login("grf");
    },
    async logout() {
      let isPass = await this.go_logout("退出");
      if (isPass) {
        this.$router.push("/home");
      }
    }
  },
  computed: {
    ...mapGetters({
      account: "login/account"
    })
  }
};
</script>

<style lang="less" scoped>
.home {
  color: red;
}
</style>

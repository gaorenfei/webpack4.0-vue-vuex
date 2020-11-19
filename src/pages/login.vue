<template>
  <div class="login">
    <p @click="login">{{ message }}</p>
    <p @click="logout">{{ account }}</p>
    <Item :id="id" :add="add" @test="test"></Item>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Item from "@/component/jsx";
export default {
  components: {
    Item,
  },
  data() {
    return {
      message: "登录",
      id: 0
    };
  },
  provide() {
    //在这里对外提供方法，在子孙组件中都可以用这个
    return {
      add: this.add
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
    },
    add() {
      this.id = this.id + 1;
    },
    test(num){
      console.log(num)
    },
    test2(){
      console.log("test")
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

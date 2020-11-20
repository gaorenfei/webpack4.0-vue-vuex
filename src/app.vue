<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue"
import Component from "vue-class-component"
@Component({
  props: {
    propMessage: String
  }
})
export default class App extends Vue {}
</script>

<style lang="less" scoped></style>

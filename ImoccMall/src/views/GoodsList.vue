<template>
  <div>
    这是商品列表 <br>
    <router-link to="/goodList/title">显示商品标题</router-link>
    <router-link to="/goodList/image">显示商品图片</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "GoodsList"
}
</script>

<style scoped>

</style>

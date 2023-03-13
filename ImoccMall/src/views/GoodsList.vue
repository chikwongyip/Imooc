<template>
  <div>
    这是商品列表 <br>
    <router-link to="/goodList/title">显示商品标题</router-link>
    <router-link to="/goodList/image">显示商品图片</router-link>
    <div>
      <router-view></router-view>
    </div>
<!--    <router-link to="/cart">跳转到购物车</router-link>-->
    <router-link v-bind:to="{name:'cart',params:{carId:123}}">跳转</router-link>
    <button @click="jump">跳转</button>
  </div>
</template>

<script>
export default {
  name: "GoodsList",
  data(){
    return {
      msg: "hello vue"
    }
  },
  methods:{
    jump(){
      // this.$router.push("/cart");
      this.$router.push({path:"/cart?id=1"});
    }
  }
}
</script>

<style scoped>

</style>

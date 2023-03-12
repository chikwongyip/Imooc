<template>
  <div>
    <button @click="add">+</button>
    <button @click="red">-</button>
    <p>
      <span>
        {{ num }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props:{
    "num":0
  },
  data(){
    return{
      num:0
    }
  },
  methods:{
    add(){
      this.$emit("add");
    },
    red(){
      this.$emit("red");
    }
  }
}
</script>

<style scoped>

</style>

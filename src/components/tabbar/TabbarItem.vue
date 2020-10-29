<template>
  <div class="tabbar-item1" @click="itemClick">
    <div v-if="isActive"><slot name="tabbar-icon-active"><div>图片</div></slot></div>
    <div v-else="isActive"><slot name="tabbar-icon"><div>图片</div></slot></div>
    <div :style="activeStyle"><slot name="tabbar-text"><div>文字</div></slot></div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        // isActive:true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'deeppink'
      }
    },
    methods:{
      itemClick(){
        console.log(this.path)
        console.log(this.activeColor)
        this.$router.push(this.path)
      }
    }
  }
</script>

<style>
  .tabbar-item1{
    height: 49px;
    flex: 1;
    text-align: center;
    margin: auto;
    font-size: 14px;
  }
  .tabbar-item1 div{
    margin-top: 3px;
  }
</style>

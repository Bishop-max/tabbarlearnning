<template>
  <div id="app">
    <!-- <div id="tabbar">
      <div class="tabbar-item">首页</div>
      <div class="tabbar-item">分类</div>
      <div class="tabbar-item">购物车</div>
      <div class="tabbar-item">我的</div>
    </div> -->
    <router-view></router-view>
    <Tabbar>
      <TabbarItem path="/home" activeColor="red">
        <div slot="tabbar-icon">首页img</div>
        <div slot="tabbar-icon-active">活跃的首页img</div>
        <div slot="tabbar-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category" activeColor="green">
        <div slot="tabbar-icon">分类img</div>
        <div slot="tabbar-icon-active">活跃的分类img</div>
        <div slot="tabbar-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart" activeColor="yellow">
        <div slot="tabbar-icon">购物车img</div>
        <div slot="tabbar-icon-active">活跃的购物车img</div>
        <div slot="tabbar-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile" activeColor="blue">
        <div slot="tabbar-icon">我的img</div>
        <div slot="tabbar-icon-active">活跃的我的img</div>
        <div slot="tabbar-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/Tabbar'
import TabbarItem from '@/components/tabbar/TabbarItem'
export default {
  name: 'App',
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
/* #tabbar{
  display: flex;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 1px rgba(100,100,100,.1);

  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;

}
.tabbar-item{
  height: 49px;
  flex: 1;
  text-align: center;
  margin: auto;
} */
</style>

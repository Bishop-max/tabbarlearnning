<template>
  <div id="tabbar1">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  #tabbar1{
    display: flex;
    background-color: #f6f6f6;
    box-shadow: 0px -1px 1px rgba(100,100,100,.1);

    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;

  }
</style>

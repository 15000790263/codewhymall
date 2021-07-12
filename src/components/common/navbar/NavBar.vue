@<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
  height: 44px;
  /* background-color: #aaa; */
  display: flex;
  justify-content: space-around;
  /* box-shadow: 0 0 5px rgba(0, 0, 0, .3); */
}
.nav-bar .center{
  flex: auto;
}

.nav-bar .left,
.nav-bar .right{
  width: 60px;
  /* background-color: aqua; */
}
</style>
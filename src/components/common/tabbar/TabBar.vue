@<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tab-bar {
  height: 49px;
  width: 100vw;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #fff;

  z-index: 102;
}
</style>
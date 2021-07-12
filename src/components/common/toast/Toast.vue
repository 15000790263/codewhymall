@<template>
  <div class="toast" v-show="isShow">
    <span>{{content}}</span>
  </div>
</template>

<script>
export default {
  props:{
    content:""
  },
  data() {
    return {
      isShow:false,
      timer:null
    }
  },
  methods: {
    disappear(){
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.isShow = false
      }, 1000);
    }
  },
}
</script>

<style>
.toast{

  width: 40%;
  height: 50px;
  position: absolute;
  z-index: 99999;

  font-size: 28px;
  color: #fff;
  letter-spacing: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  background-color: rgb(189, 187, 187);
  border-radius: 10px;
  /* transition: all 1000s; */
}
</style>
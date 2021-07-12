@<template>
  <div>
    <div class="tab-bar-item" @click="tabbarClick" :style="activeStyle">
      <div class="item-icon"><slot name="item-icon"></slot></div>
      <div><slot name="item-text"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    tabBarObj:{
      type: Object,
      default (){
        return {}
      }
    }
  },
  
  methods: {
    tabbarClick() {
      // console.log(this.tabBarObj);
      this.$router.push(this.tabBarObj.path)
    },
  },
  computed: {
    activeStyle(){
      if (this.$route.path.indexOf(this.tabBarObj.path) !== -1){
        return {color:this.tabBarObj.color}
      }else return {}
    }
  },
};
</script>

<style>
.tab-bar-item {
  /* background-color: orange; */
  text-align: center;
  font-size: 12px;
}
.tab-bar-item .item-icon {
  font-size: 20px;
}
.tab-bar-item div {
  margin: 2px 0;
}
</style>
@<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  props: {
    probeType: {
      type: Number,
      dafault: 0,
    },
  },
  data() {
    return {
      scroll,
    };
  },
  // mounted() {
  mounted() {
    // 必须在页面挂载完毕后初始化bs，否则找不到$refs
    // this.$nextTick(() => {   是和created搭配来使用的
      this.scroll = new BScroll(this.$refs.wrapper, {
        observeDOM: true,
        click: true,

        probeType: this.probeType,
        pullUpLoad:true
      });

      this.scroll.on("scroll", (position) => {
        this.$emit("onscroll", position);
        // this.scroll.y松手后就不变了，没惯性
        // console.log(this.scroll.y);
        // position.y在惯性运动阶段也会变
        // console.log(position.y);
      });

      this.scroll.on("pullingUp",() => {
        this.$emit('pullingUp')
        // console.log(123);
      })
    // });
  },
  methods: {
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
      this.refresh()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
      // console.log("小月月");
    },
    scrollTo(x,y,delay= 300){
      this.scroll && this.scroll.scrollTo(x,y,delay)
      this.refresh()
    },
    getScrollY(){
      return this.scroll && this.scroll.y
      
    }
  },
};
</script>

<style>
</style>
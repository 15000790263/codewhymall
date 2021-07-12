@<template>
  <div>
    <swiper ref="swiper" v-if="banners.length">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link"><img :src="item.image" alt="" /></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";

export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    stopTimer() {
      this.$refs.swiper.stopTimer();
      // console.log("停止");
    },
    startTimer() {
      if (this.$refs.swiper) {
        
        this.$refs.swiper.startTimer();
        // console.log("启动");
      }
    },
  },
};
</script>

<style>
</style>
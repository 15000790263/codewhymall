@<template>
  <div class="detail-swiper">
    <swiper class="item" v-if="topImages.length" ref="swiper">
      <swiper-item v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'
export default {
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem

  },
  methods: {
    stopTimer(){
      this.$refs.swiper.stopTimer()
    },
    startTimer(){
      this.$refs.swiper.startTimer()
    }
  },
}
</script>

<style>
.detail-swiper .item{
  height: 250px;
  text-align: center;
}
</style>
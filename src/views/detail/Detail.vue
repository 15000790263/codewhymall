@<template>
  <div id="detail">
    <detail-nav-bar ref="detnav" @titleClick="titleClick"></detail-nav-bar>
    <scroll ref="scroll" @onscroll="onscroll">
      <detail-swiper ref="detailSwiper" :topImages="topImages"></detail-swiper>
      <detail-base-info :baseInfo="baseInfo"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info
        @imgLoad="imgLoad"
        :detailInfo="detailInfo"
      ></detail-goods-info>
      <detail-params-info
        ref="params"
        :paramsInfo="paramsInfo"
      ></detail-params-info>
      <detail-comment-info
        ref="comment"
        :commentInfo="commentInfo"
      ></detail-comment-info>
      <detail-recommend-info
        ref="recommend"
        :recommendInfo="recommendInfo"
      ></detail-recommend-info>
    </scroll>
    <detail-bottom-bar @addClick="addClick"></detail-bottom-bar>
    <toast ref="toast" content="添加成功"></toast>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import { debounce } from "@/common/utils";
// import {showToast} from "@/toast"


import { getDetail, Goods, Shop, getRecommend } from "@/network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import Toast from '../../components/common/toast/Toast.vue';

export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    Toast,
  },
  data() {
    return {
      topImages: [],
      baseInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: [],
      themeTopY: [],
      getThemeTopY: {},
    };
  },
  created() {
    // 网络请求
    let iid = this.$route.query.iid;
    this.getDetail(iid);
    this.getRecommend();

    this.getThemeTopY = debounce(() => {
      this.themeTopY.push(44);
      this.themeTopY.push(this.$refs.params.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
    }, 500);
  },
  mounted() {
    // ！！！注意：这里的形参是个函数，而不是函数返回值
    let refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("detailImgLoad", () => {
      // console.log("detail图片加载完成");
      refresh();
    });

    setTimeout(() => {
      this.$refs.detailSwiper.startTimer();
    }, 1000);
  },
  // activated() {
  //   console.log("你猜我出不出来");
  //   this.$refs.detailSwiper.startTimer();
  // },
  beforeRouteLeave(to, from, next) {
    // ...

    this.$refs.detailSwiper.stopTimer();
    // console.log(this.$refs.scroll);
    // console.log("离开detail");
    next();
  },
  methods: {
    getDetail(iid) {
      getDetail(iid).then((res) => {
        console.log(res);
        this.topImages = res.result.itemInfo.topImages;
        this.baseInfo = new Goods(
          res.result.columns,
          res.result.itemInfo,
          res.result.shopInfo
        );
        this.shopInfo = new Shop(res.result.shopInfo);
        this.detailInfo = res.result.detailInfo;
        this.paramsInfo = res.result.itemParams;
        this.commentInfo = res.result.rate.list[0];
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        // console.log(res);
        this.recommendInfo = res.data.list;
      });
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, 44 - this.themeTopY[index], 50);
    },
    imgLoad() {
      this.getThemeTopY();
    },
    onscroll(position) {
      let y = position.y;
      if (44 - y >= this.themeTopY[3]) {
        this.$refs.detnav.currentIndex = 3;
      } else if (44 - y >= this.themeTopY[2]) {
        this.$refs.detnav.currentIndex = 2;
      } else if (44 - y >= this.themeTopY[1]) {
        this.$refs.detnav.currentIndex = 1;
      } else if (44 - y >= this.themeTopY[0]) {
        this.$refs.detnav.currentIndex = 0;
      }

      // for (var i = 3; i >= 0; i--) {
      //   if (44 - y >= this.themeTopY[i]) {
      //     this.$refs.detnav.currentIndex = i;
      //   }
      // }
    },
    addClick() {
      const obj = {
        iid: this.$route.query.iid,
        image: this.topImages[0],
        title: this.baseInfo.title,
        price: this.baseInfo.price,
        desc: this.detailInfo.desc,
        count: 1,
        checked: true,
      };


      const arry = this.$store.state.cartList;

      
      if (arry.length === 0) {
        this.$store.commit("addToCart", obj);
      } else {
        arry.find((item) => {
          return item.iid === obj.iid;
        })
          ? this.$store.commit("addToCount", obj.iid)
          : this.$store.commit("addToCart", obj);
      }
      this.$refs.toast.isShow = true
      this.$refs.toast.disappear()
    },
  },
};
</script>

<style>
#detail {
  height: 100vh;
}
#detail .wrapper {
  height: calc(100% - 49px - 44px);
  overflow: hidden;
}
</style>
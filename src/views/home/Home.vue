<template>
  <div id="home">
    <nav-bar @click.native="goBack" class="nav-bar">
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <tab-control
      v-show="isShow"
      class="copytab-control"
      @click.native="tabClick"
      ref="tabcontrol1"
      :titles="['流行', '新款', '精选']"
      @tabcontrolClick="tabcontrolClick"
    ></tab-control>
    <scroll
      ref="scroll"
      :probeType="3"
      @onscroll="onscroll"
      @pullingUp="pullingUp"
    >
      <home-swiper ref="homeSwiper" :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <div class="static-picture">
        <a href="javascript:;"><img src="@/assets/img/3.jpg" alt="" /></a>
      </div>
      <tab-control
        ref="tabcontrol2"
        @click.native="tabClick"
        :titles="['流行', '新款', '精选']"
        @tabcontrolClick="tabcontrolClick"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/common/navbar/NavBar.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";

import { debounce } from "@/common/utils.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControl,
    GoodsList,
    Scroll,
  },

  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      types: ["pop", "new", "sell"],
      index: 0,
      isShow: false,
      saveY: 0,
      // startTimer:{}
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.types[this.index]].list;
    },
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh);

    this.$bus.$on("homeImgLoad", () => {
      // console.log("home图片加载完成");
      refresh();
    });
    setTimeout(() => {
      this.$refs.homeSwiper.startTimer();
    }, 1000);
  },
  activated() {
    // let startTimer = debounce(this.$refs.homeSwiper.startTimer, 4000);
    // startTimer();
    // this.saveY = this.$refs.scroll.getScrollY();
    this.$refs.homeSwiper.startTimer();
    this.$refs.scroll.scrollTo(0, this.saveY, 10);
    // console.log(this.saveY);
  },
  deactivated() {
    this.$refs.homeSwiper.stopTimer();
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log(this.saveY);
  },
  methods: {
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.recommends);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(this.goods);
      });
    },
    tabcontrolClick(index) {
      this.index = index;
    },
    // 滑动y坐标
    onscroll(position) {
      // if(position && -position.y > 500) this.isShow = true
      const ost = this.$refs.tabcontrol2.$el.offsetTop;
      this.isShow = position && -position.y > ost;
      // console.log(ost);
    },
    // 上拉加载更多
    pullingUp() {
      this.getHomeGoods(this.types[this.index]);
      this.$refs.scroll.finishPullUp();
      // console.log("----");
    },
    // 双击返回
    goBack() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // tabClick
    tabClick() {
      this.$refs.tabcontrol1.currentIndex = this.index;
      this.$refs.tabcontrol2.currentIndex = this.index;
    },
  },
  // beforeRouteLeave (to, from, next) {
  //   this.busy = true
  //   this.saveY = this.$refs.scroll.getScrollY();
  //   console.log(this.saveY);
  //   next()
  // },
  beforeRouteEnter(to, from, next) {
    // ...
    // this.$refs.homeSwiper.startTimer();
    // this.$refs.scroll.scrollTo(0,this.saveY,10)
    // console.log(this.saveY);
    next();
  },
};
</script>

<style>
#home {
  height: 100vh;
  /* overflow: hidden; */
}
#home .wrapper {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
/* #home .wrapper{
  height: calc(100% - 44px -49px);
  overflow: hidden;
} */
#home .nav-bar {
  background-color: #ff8e9b;
  user-select: none;
}
#home .nav-bar div {
  text-align: center;
  line-height: 44px;
  font-size: 16px;
  color: #fff;
}
.static-picture img {
  width: 100%;
}

.copytab-control {
  position: absolute;
  width: 100vw;
  background-color: #fff;
  z-index: 9;
}
</style>

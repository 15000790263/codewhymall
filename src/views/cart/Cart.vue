@<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车（{{ cartListLength }}）</div>
    </nav-bar>
    <scroll class="cart-scroll" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
import CartList from "./childComps/CartList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BottomBar from './childComps/BottomBar.vue';

export default {
  components: {
    NavBar,
    CartList,
    Scroll,
    BottomBar,
  },
  computed: {
    ...mapGetters(["cartListLength"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  updated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style>
#cart .nav-bar {
  background-color: #ff8e97;
  color: #fff;
  font-size: 16px;
  line-height: 44px;
  text-align: center;
  /* font-weight: bolder; */
}
#cart {
  height: 100vh;
  /* background-color: #dd0; */
}
.cart-scroll {
  height: calc(100% - 44px - 40px - 49px);
  /* height: 200px; */
  overflow: hidden;
}
</style>
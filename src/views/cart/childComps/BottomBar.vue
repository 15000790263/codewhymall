@<template>
  <div class="cart-bottombar">
    <div class="selectall" @click="isAllShowClick">
      <div v-if="isSelectAll" class="fas fa-check-circle checked-icon"></div>
      <div v-else class="fas fa-check-circle unchecked-icon"></div>
      <span>全选</span>
    </div>
    <span class="total-price">合计:￥{{ totalPrice }}</span>
    <span class="gobuy">去计算</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAllShow: true,
    };
  },
  methods: {
    isAllShowClick() {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach((element) => {
          element.checked = false;
        });
      }else {
        this.$store.state.cartList.forEach((element) => {
          element.checked = true;
        });
      }
      this.isAllShow = this.isSelectAll;
      this.$bus.$emit("isAllShowClick", [this.isAllShow]);
    },
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => item.checked === true)
        .reduce((preValue, item) => {
          return item.price * item.count + preValue;
        }, 0)
        .toFixed(2);
    },
    isSelectAll() {
      if (
        this.$store.state.cartList.length === 0 ||
        this.$store.state.cartList.find((item) => item.checked === false)
      )
        return false;
      else return true;
    },
  },
  // mounted() {
  //   if(this.$store.state.cartList.find(item => {item.checked === false})){
  //     this.isAllShow = false
  //   }else this.isAllShow = true
  // },
};
</script>

<style>
.cart-bottombar {
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  left: 0;
  bottom: 49px;
  font-size: 14px;
  z-index: 1000;
  background-color: rgb(231, 231, 231);
}
.total-price {
  flex: 0.8;
  /* bac
  kground-color: #fff; */
}

.selectall{
  padding-left: 10px;
}
.gobuy{
  background-color: #FF8E97;
  color: #fff;
  padding: 0 30px;
}
</style>
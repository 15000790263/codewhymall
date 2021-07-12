@<template>
  <div class="cart-list-item-wrapper">
    <div @click="isShowClick">
      <div v-if="isShow" class="fas fa-check-circle checked-icon"></div>
      <div v-else class="fas fa-check-circle unchecked-icon"></div>
    </div>
    <div class="img-wrapper"><img :src="cartListItem.image" alt="" /></div>
    <div class="info-wrapper">
      <div class="title">{{ cartListItem.title }}</div>
      <div class="desc">{{ cartListItem.desc }}</div>
      <!-- <span class="desc">{{item.desc}}</span> -->
      <div class="price-count">
        <span class="price">￥{{ cartListItem.price }}</span>
        <span>x{{ cartListItem.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartListItem: {
      type: Object,
      default: {}
    },
  },
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    isShowClick() {
      this.isShow = !this.isShow;
      // this.cartListItem.checked = this.isShow
      this.$store.state.cartList.find(item => item.iid === this.cartListItem.iid).checked = this.isShow;
      // console.log(this.cartListItem);

    },
    
  },
  mounted() {
      this.$bus.$on("isAllShowClick",aaa =>{
        this.isShow = aaa[0];
        // console.log(aaa);
      })
    },
};
</script>

<style>
.cart-list-item-wrapper {
  display: flex;
  /* width: 100%; */
  justify-content: space-evenly;
  align-items: center;
  height: 90px;
  padding: 5px 0 3px 0;
  border-bottom: 3px solid rgba(207, 203, 203, 0.616);
}
.checked-icon {
  color: red;
  font-size: 12px;
}
.unchecked-icon {
  color: rgba(133, 131, 131, 0.534);
  font-size: 12px;
}
.uncheck-icon {
  width: 10px;
  height: 10px;
  background-color: #fff;
  position: relative;
  bottom: 12px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.4);
}
.img-wrapper {
  width: 60px;
}
.img-wrapper img {
  width: 60px;
  border-radius: 5px;
}

.info-wrapper {
  height: 90px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}
.info-wrapper .title,
.info-wrapper .desc {
  width: 70vw;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info-wrapper .title {
  font-size: 16px;
}
.info-wrapper .desc {
  opacity: 0.6;
}
.price-count {
  display: flex;
  justify-content: space-between;
}
</style>
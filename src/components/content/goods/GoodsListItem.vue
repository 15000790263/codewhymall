@<template>
  <div class="goods-list-item" @click="itemClick">
    <div><img @load="itemLoad" :src="showImgs" alt="" /></div>
    <div class="product-info">
      <div class="title">
        <span>{{ goodslist.title }}</span>
      </div>
      <div class="pricestar">
        <span class="price">￥{{ goodslist.price }}</span>
        <span>☆{{ goodslist.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodslist: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemLoad() {
      if (this.$route.path.indexOf("/home") !== -1) {
        this.$bus.$emit("homeImgLoad");
      } else if (this.$route.path.indexOf("/detail") !== -1) {
        this.$bus.$emit("detailImgLoad");
      }
    },
    itemClick() {
      let iid = this.goodslist.iid;
      if (this.$route.path.indexOf("/home") !== -1) {
        // console.log("hello");
        this.$router.push({ path: "/detail", query: { iid } });
      } else if (this.$route.path.indexOf("/detail") !== -1) {
        alert("STOP CLICK!!!");
        console.log(this.$router);
      }
    },
  },
  computed: {
    showImgs() {
      return this.goodslist.image || this.goodslist.show.img;
    },
  },
};
</script>

<style>
.goods-list-item {
  width: 48%;
  display: flex;
  justify-content: space-evenly;
  align-content: space-between;
  flex-flow: column;

  margin-top: 5px;
}
.product-info {
  line-height: 16px;
  display: flex;
  flex-flow: column;
  /* align-items: center; */
}

.product-info .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 2px 0;
}
.pricestar {
  align-self: center;
}
.price {
  font-size: 14px;
  color: #fe8e9f;
  padding-right: 10px;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}
</style>
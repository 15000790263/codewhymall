@<template>
  <div class="goods-list" v-if="goods.length">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goodslist="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods-list{
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  align-items: flex-start;
  /* align-content: center; */
}
</style>
@<template>
  <div class="detail-recommend">
    <goods-list :goods = "recommendInfo"></goods-list>
  </div>
</template>

<script>
import GoodsList from "../../../components/content/goods/GoodsList.vue";
export default {
  props: {
    recommendInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsList,
  },
};
</script>

<style>
</style>
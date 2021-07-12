@<template>
  <div class="cart-list">
    <cart-list-item
      v-for="item in $store.state.cartList"
      :cartListItem="item"
    ></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue";
export default {
  components: {
    CartListItem,
  },
};
</script>

<style>
.cart-list {
  width: 100%;
}
</style>
@<template>
  <div class="cate-tabmenu">
    <scroll>
      <ul class="left-menu">
        <li
          @click="liClick(index)"
          v-for="(item, index) in categories"
          :class="{ active: currentIndex === index }"
        >
          {{ item.title }}
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll.vue";
export default {
  components: { Scroll },
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    liClick(index) {
      this.currentIndex = index;
      this.$emit('leftLiClick',index)
    },
  },
};
</script>

<style>
.cate-tabmenu {
  font-size: 14px;
  line-height: 57px;
  width: 84px;
  text-align: center;
  background-color: #f8f8f8;
  position: fixed;
  height: 100vh;
  z-index: 100;
}
.cate-tabmenu .wrapper{
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.cate-tabmenu .active {
  color: red;
  background-color: #fff;
}
</style>
@<template>
  <div class="tab-control">
    <div
      :class="{ active: currentIndex === index }"
      @click="tabcontrolClick(index)"
      v-for="(item, index) in titles"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      dafault() {
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
    tabcontrolClick(index) {
      this.currentIndex = index;
      this.$emit('tabcontrolClick', index)
    },
  },
};
</script>

<style>
.tab-control {
  height: 40px;
  /* background-color: rgb(240, 245, 239); */

  font-size: 14px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tab-control div {
  box-sizing: border-box;
  line-height: 25px;
  border-bottom: 2px solid transparent;
}
.tab-control .active {
  border-bottom: 2px solid #ff8e98;
  color: #ff8e9b;
}
</style>
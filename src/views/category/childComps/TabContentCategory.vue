@<template>
  <div id="tcc">
    <scroll ref="scroll">
      <div class="tab-content-category" v-if="Object.keys(categoryData).length">
        <tab-content-category-item
          @cateImgLoad="cateImgLoad()"
          v-for="(item, index) in categoryData.data.list"
          :key="index"
          :dataList="item"
        ></tab-content-category-item>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll.vue";
import TabContentCategoryItem from "./TabContentCategoryItem.vue";
import {debounce} from "@/common/utils.js"
export default {
  components: {
    TabContentCategoryItem,
    Scroll,
  },
  props: {
    categoryData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      refresh:{}
    }
  },
  created() {
    
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh)
  },
  methods: {
    cateImgLoad() {
      // debounce(this.$refs.scroll.refresh)()
      // this.$refs.scroll.refresh()
      this.refresh()
    },
  },
};
</script>

<style>
#tcc {
  height: 100vh;
}
#tcc .wrapper {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.tab-content-category {
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  width: 100%;
  padding: 5px 5px 5px 90px;
  align-content: center;
}
</style>
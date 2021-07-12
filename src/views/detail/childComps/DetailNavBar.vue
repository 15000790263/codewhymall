@<template>
  <div class="dnav-bar">
    <nav-bar>
      <div @click="backClick" slot="left" class="fas fa-chevron-left"></div>
      <ul class="nav-info" slot="center">
        <li
          @click="liClick(index)"
          :class="{ active: currentIndex === index }"
          v-for="(item, index) in navInfo"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      navInfo: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    liClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style>
.dnav-bar {
  /* background-color: #bfa; */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  line-height: 44px;
  font-size: 14px;
}
.dnav-bar .fas {
  padding: 0 20px;
  /* font-size: 20px; */
}
.dnav-bar .nav-info {
  display: flex;
  justify-content: space-around;
}

.dnav-bar .nav-info .active {
  color: #e23838;
}
</style>
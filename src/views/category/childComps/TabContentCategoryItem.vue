@<template>
  <div class="tcci">
    <div class="image">
      <a :href="dataList.link">
        <img @load="cateImgLoad" :src="dataList.image" alt="" />
      </a>
    </div>
    <div class="title">
      <span>{{ dataList.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    cateImgLoad() {
      // console.log(1234567);
      this.$emit('cateImgLoad')
    },
  },
};
</script>

<style>
.tcci {
  display: flex;
  flex-flow: column;
  width: 26%;
  /* padding: 5px; */
  /* flex: auto; */
  text-align: center;
  margin-bottom: 20px;

  color: #666;
}
.tcci img {
  width: 100%;
}
</style>
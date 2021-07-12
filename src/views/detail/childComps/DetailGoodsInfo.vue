@<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="desc">
      <div class="start"></div>
      {{ detailInfo.desc }}
      <div class="end"></div>
    </div>

    <ul>
      <li v-for="(item, index) in detailInfo.detailImage[0].list" :key="index">
        <img @load="imgLoad" :src="item" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad(){
      this.$emit('imgLoad')
    }
  },
};
</script>

<style>
.detail-info {
  padding: 15px;
}
.detail-info .start {
  width: 90px;
  height: 10px;
  border-top: 1px solid rgb(180, 180, 180);
}
.detail-info .start::before {
  top: -5px;
  left: 0;
}

.detail-info .start::before,
.detail-info .end::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #000;
}

.detail-info .end {
  width: 90px;
  height: 10px;
  border-bottom: 1px solid rgb(180, 180, 180);
  position: absolute;
  bottom: -15px;
  right: 0;
}
.detail-info .end::before {
  top: 5px;
  right: 0;
}
.detail-info .desc {
  font-size: 14px;
  position: relative;
  margin-bottom: 20px;
}

.detail-info li img {
  width: 100%;
}
</style>
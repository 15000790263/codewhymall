@<template>
  <div class="baseinfo">
    <div class="title">
      <span>{{ baseInfo.title }}</span>
    </div>
    <div class="info-price">
      <h2>￥{{ baseInfo.price }}</h2>
      <span class="oldprice">{{ baseInfo.oldPrice }}</span>
      <span class="discount" v-show="baseInfo.discount">{{ baseInfo.discount }}</span>
    </div>
    <div class="info-other">
      <span v-for="(item, index) in baseInfo.columns" :key="index">{{
        item
      }}</span>
    </div>
    <div class="info-services">
      <div v-for="(item, index) in baseInfo.services" :key="index">
        <img :src="item.icon" alt="" /><span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.baseinfo {
  height: 166px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  padding: 10px;
  border-bottom: 6px solid rgb(240, 237, 237)
}
.baseinfo .title{
  line-height: 16px;
}
.info-other,
.info-services,
.info-price {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.info-other{
  color: rgb(165, 165, 165);
  border-bottom: 1px solid rgb(240, 237, 237);
}
.info-other span{
  height: 20px;
}

.info-services img {
  width: 14px;
  vertical-align: bottom;
}
/* .info-services span{
  font-size: 8px;
} */

.info-price {
  justify-content: flex-start;
  align-items: flex-end;
}
.info-price h2{
  font-size: 24px;
  color: #ff8e9b;
}
.info-price .discount{
  position: relative;
  top: -5px;
  line-height: 24px;
  font-size: 12px;
  padding: 0 2px;
  border-radius: 10px;
  background-color: #ff8e9b;
  color: #fff ;
}
.info-price .oldprice{
  color: rgb(165, 165, 165);
  text-decoration: line-through;
}
</style>
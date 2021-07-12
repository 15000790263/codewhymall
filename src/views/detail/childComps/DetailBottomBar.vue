@<template>
  <div class="detail-bottom">
    <div class="service">
      <div class="fas fa-phone"><br><span>客服</span></div>
      <div class="fas fa-store"><br><span>店铺</span></div>
      <div class="fas fa-star"><br><span>收藏</span></div>
    </div>
    <div class="addtobuy">
      <div @click="addClick" class="add">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addClick(){
      // console.log(this.$route.query.iid);
      this.$emit("addClick")
    }
  },
}
</script>

<style>
.detail-bottom{
  background-color: #fff;
  position: fixed;
  z-index: 103;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 49px;

  display: flex;
  justify-content: space-between;
}
.addtobuy,.detail-bottom .service{
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  flex: auto;
}

.detail-bottom .service div{
  font-size: 16px;
  line-height: 16px;
  margin-top: 5px;
  /* font-weight: normal; */
}
.detail-bottom .service span{
  font-size: 12px;
  font-weight: normal;
}
.addtobuy .add,
.addtobuy .buy{
  line-height: 49px;
  flex: auto;
  font-size: 14px;
  background-color: #fb7599;
  color: #fff;
}
.addtobuy .add{
  background-color: #ff0;
  color: #000;
}
</style>
@<template>
  <div id="user">
    <div class="login">
      <i class='fas fa-user'></i>
      <span>登陆/注册〉</span>
    </div>

    <div class="collection">
      <i class="fas fa-star">商品收藏</i>
      <i class="fas fa-store">店铺关注</i>
      <i class="fas fa-clock">浏览记录</i>
    </div>

    <div class="order_info">
      <div>
        <i class="fas fa-store"></i>
        <span>代付款</span>
      </div>
      <div>
        <i class="fas fa-store"></i>
        <span>待收货</span>
      </div>
      <div>
        <i class="fas fa-store"></i>
        <span>待评价</span>
      </div>
      <div>
        <i class="fas fa-store"></i>
        <span>退换/售后</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#user{
  padding: 10px;
  font-size: 26px;

  display: flex;
  flex-flow: column;
  /* background-color: #eee; */
  height: 100vh;

}
#user i{
  margin: 5px;
}
.login{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 260px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow:0 0 5px rgba(0, 0, 0, .15);
  /* background-color: #0094ff; */
}
.login i{
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #FF8E97;

  font-size: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #FFf;

  margin-bottom: 10px;
}
.collection,.order_info{
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;

  background-color: #fff;
  border-radius: 10px;
  margin-top: 10px;

  box-shadow:0 0 5px rgba(0, 0, 0, .15);
}
.order_info{
  height: 60px;
}
.order_info div{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
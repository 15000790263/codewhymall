@<template>
  <div class="shop-info">
    <div class="logo-name">
      <img :src="shopInfo.logo" alt="" /><span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="sale-count">
          <span>总销量</span
          ><span class="fans">{{ (shopInfo.cFans / 10000).toFixed(1) }}万</span>
        </div>
        <div class="sale-count">
          <span>全部宝贝</span><span class="count">{{ shopInfo.cGoods }}</span>
        </div>
      </div>
      <div class="shop-middle-right">
        <ul>
          <li v-for="(item, index) in shopInfo.score" :key="index">
            <span>{{ item.name }}</span>
            <div class="scorecolor">
              <span v-show="!item.isBetter" :style="{ color: 'yellowgreen' }">{{
                item.score
              }}</span
              ><span v-show="item.isBetter" :style="{ color: 'red' }">{{
                item.score
              }}</span
              ><span
                class="select"
                v-show="item.isBetter"
                :style="{ color: 'red' }"
                >高</span
              ><span
                class="select"
                v-show="!item.isBetter"
                :style="{ color: 'yellowgreen' }"
                >低</span
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="enter-shop">
      <a href=""><span>进店逛逛</span></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.shop-info {
  height: 226px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
}
.logo-name {
  display: flex;
  align-items: center;
}
.shop-info img {
  height: 47px;
  margin-right: 10px;
}

.shop-middle {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  flex: auto;
}
.shop-middle-left {
  line-height: 30px;
  width: 48vw;
  display: flex;
  justify-content: space-evenly;
  border-right: 1px solid rgb(230, 229, 229);
}
.shop-middle-left span {
  display: block;
  text-align: center;
}
.shop-middle-left .fans,
.shop-middle-left .count {
  font-size: 24px;
}
.shop-middle-right {
  position: relative;
  line-height: 24px;
  flex: auto;
  display: flex;
  justify-content: space-around;
}
.shop-middle-right li {
  width: 110px;
}
.shop-middle-right div {
  display: inline;
}
.enter-shop {
  width: 150px;
  height: 30px;
  background-color: rgb(238, 238, 238);
  border-radius: 10px;

  text-align: center;
  line-height: 30px;
  font-size: 14px;

  align-self: center;
}
.select {
  position: absolute;
  right: 30px;
}
.scorecolor {
  margin-left: 10px;
}
</style>
@<template>
  <div class="recommend" v-if="recommends.length">
    <div class="recommend-item" v-for="(item, index) in recommends">
      <a :href="item.link"><img :src="item.image" alt="" /></a>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  justify-content: space-around;
  width: 100vw;
  /* background-color: #bfa; */
  border-bottom: 5px solid rgba(0, 0, 0, .1);
}
.recommend-item{
  width:23%;
  text-align: center;
  color: rgb(44, 101, 158);
  padding-bottom:15px ;
  
}
.recommend-item img{
  width: 100%;
  padding: 20px 0 10px;
}
</style>
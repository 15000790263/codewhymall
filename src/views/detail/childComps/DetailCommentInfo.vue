@<template>
  <div class="detail-comment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="title">
      <span style="font-size: 15px">用户评价</span
      ><span :style="{ fontSize: '12px' }">更多&nbsp;〉</span>
    </div>
    <div class="user">
      <img :src="commentInfo.user.avatar" alt="" />{{ commentInfo.user.uname }}
    </div>
    <div class="comt">{{ commentInfo.content }}</div>
    <div class="date">
      <span>{{showDate}}</span>
      <span>{{ commentInfo.style }}</span>
    </div>
    <div class="com-imgs">
      <div class="img" v-for="item in commentInfo.images">
        <img :src="item" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/common/utils";
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showDate() {
      // let date = new Date(this.commentInfo.created * 1000)
      // return formatDate(date,"yyyy-MM-dd hh:mm:ss")
      return this.getDate()
    },
  },
  methods: {
    getDate(){
      let date = new Date(this.commentInfo.created * 1000)
      return formatDate(date,"yyyy-MM-dd hh:mm:ss")
    }
  },
 
  // filters: {
  //   showDate(value) {
  //     let date = new Date(value * 1000);
  //     return formatDate(date, "yyyy-MM-dd hh:mm:ss")
  //   },
  // },
};
</script>

<style>
.detail-comment {
  border-top: 5px solid rgb(243, 241, 241);
  border-bottom: 5px solid rgb(243, 241, 241);
  padding: 15px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
.detail-comment .title {
  line-height: 45px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgb(243, 241, 241);
}
.detail-comment .user {
  font-size: 16px;
  height: 42px;
  line-height: 42px;
  margin: 10px 0;
}
.detail-comment .user img {
  border-radius: 50%;
  width: 42px;
  margin-right: 10px;
  vertical-align: top;
}

.detail-comment .comt {
  color: #777;
  font-size: 14px;
  line-height: 18px;
}
.detail-comment .date {
  display: flex;
  justify-content: space-between;
  color: #999;
  line-height: 30px;
  border-bottom: 1px solid rgb(243, 241, 241);
  margin: 5px 0;
}
.com-imgs {
  display: flex;
}
.com-imgs img {
  width: 70px;
  height: 70px;
}
.com-imgs .img {
  overflow: hidden;
  margin: 10px 5px 0 0;
}
</style>
@<template>
  <div class="detail-params" v-if="Object.keys(paramsInfo).length !== 0">
    <table class="rule">
      <tr v-for="(item,index) in paramsInfo.rule.tables[0]">
        <td v-for="i in item">{{i}}</td>
      </tr>
    </table>
    <table class="set">
      <tr v-for="(item,index) in paramsInfo.info.set">
        <td class="key">{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.detail-params {
  border-top: 5px solid rgb(243, 241, 241);
  padding: 15px;
}
.rule,.set{
  width: 100%;
  font-size: 14px;
  line-height: 40px;
  border-bottom:1px solid rgb(243, 241, 241) ;
}
.rule td,.set td{
  border-bottom:1px solid rgb(243, 241, 241) ;
}
.set .key{
  width: calc(100% / 3.5);
}
.set .value{
  color: #eb4868;
}
</style>
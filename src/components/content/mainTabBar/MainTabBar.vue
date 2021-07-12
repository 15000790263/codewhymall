@<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item :tabBarObj="{ path: '/home', color: 'red' }">
        <div slot="item-icon" class="fas">&#xf015;</div>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item :tabBarObj="{ path: '/category', color: 'red' }">
        <div slot="item-icon" class="fas">&#xf0ae;</div>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item :tabBarObj="{ path: '/cart', color: 'red' }">
        <div slot="item-icon" class="fas">&#xf07a;</div>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item :tabBarObj="{ path: '/profile', color: 'red' }">
        <div slot="item-icon" class="fas">&#xf007;</div>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabBarItem from "@/components/common/tabbar/TabBarItem.vue";

export default {
  components: { TabBar, TabBarItem },
};
</script>

<style>

</style>
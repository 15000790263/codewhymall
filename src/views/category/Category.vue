@<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <tab-mnue class="tab-menu" @leftLiClick="leftLiClick" :categories="categories"></tab-mnue>
    <tab-content-category :categoryData="categoryData"></tab-content-category>
  </div>
</template>

<script>

import {getCategory,getSubCategory,getCategoryDetail} from "@/network/category.js"


import NavBar from '../../components/common/navbar/NavBar.vue'
import TabMnue from './childComps/TabMnue.vue'
import TabContentCategory from './childComps/TabContentCategory.vue'
export default {
  components:{
    NavBar,
    TabMnue,
    TabContentCategory

  },
  data() {
    return {
      categories:[],
      currentIndex:0,
      categoryData:{},
      subCategories:[],
    }
  },
  created() {
    // 1，请求数据
    this.getCategory()
  },
  mounted() {
    this.categoryData = this.subCategories[this.currentIndex]

  },
  methods: {
    getCategory(){
      getCategory().then(res => {
        // console.log(res);
        this.categories = res.data.category.list
        this.categories.forEach(element => {
          // this.subCategories.push(element.maitKey)
          this.getSubCategory(element.maitKey)
        });
        
      })
    },
    getSubCategory(ele){
      // console.log(this.subCategories);
      // 可能是找不到this，this可能是window
      // for(let i = 0;i<this.subCategories.length ;i++){
      //   console.log(i);
      // }
      getSubCategory(ele).then(res => {
        // console.log(this.i++);
       this.subCategories.push(res)
        this.categoryData = this.subCategories[this.currentIndex]
      })
      
    },
    leftLiClick(index){
      this.categoryData = this.subCategories[index]
      console.log(this.categoryData);
    }
  },
}
</script>

<style>
#category .nav-bar{
  background-color: #FF8E9B;
  color: #fff;
  font-size: 16px;
  box-shadow: none;
  line-height: 44px;
  text-align: center;
}


</style>
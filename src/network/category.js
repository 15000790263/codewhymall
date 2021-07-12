import { request, request2 } from "./request"

export function getCategory(){
  return request2({
    url:'/category'
  })
}

export function getSubCategory(maitKey){
  return request2({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey,type){
  return request2({
    url:'/category/datail',
    params:{
      miniWallkey,
      type
    }
  })
}
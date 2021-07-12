import { request, request2 } from "./request";

export function getDetail(iid){
  return request2({
    url:"/detail",
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request2({
    url:"/recommend"
  })
}

export class Goods{
  constructor(columns,itemInfo,shopInfo){
    this.columns = columns
    this.price = itemInfo.lowNowPrice
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.title = itemInfo.title
    this.services = shopInfo.services
  }
}

export class Shop{
  constructor(shopInfo) {
    this.logo = shopInfo.logo ||  shopInfo.shopLogo
    this.name = shopInfo.name
    this.cFans = shopInfo.cFans
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.shopUrl = shopInfo.shopUrl
    this.score = shopInfo.score
  }
}
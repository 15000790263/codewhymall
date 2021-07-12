// 在哪里使用网络请求就在那导入
import {request, request2} from "./request"

export function getHomeMultidata(){
  return request({
    url:"/home/multidata"
  })
}

export function getHomeGoods(type,page){
  return request2({
    url:"/home/data",
    params:{
      type,
      page
    }
  })

}
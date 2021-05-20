import {request} from "./request";
// 首页的网络请求都从这边发出
export function getHomeMultiData() {
  return request({
    url:'/home/multidata'
  })
}
// 首页商品
export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
// 怎么把获取到的数组放到另外一个数组里面？
// let totalNum=[]
// const Nums=[10,20,30,40]
// totalNum=Nums
// 第一种
// for(let n of nums){
//   totalNum.push(n)
// }
// 第二种
// totalNum.push(...nums)

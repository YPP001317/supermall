<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <scroll class="content" ref="scroll">
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control :titles="['流行','新款','精选']"
                     @tabClick="tabClick"/>
        <goods-list :goods="showGoods"/>
      </scroll>
<!--      <back-top @click.native="BackClick"></back-top>-->
      <back-top @click.native="BackTop"></back-top>

    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/common/backTop/BackTop";

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from "./childComps/FeatureView";
  import {getHomeMultiData,getHomeGoods} from "network/home";

  export default {
        name: "Home",
        components: {
            NavBar,
            TabControl,
            HomeSwiper,
            RecommendView,
            FeatureView,
            GoodsList,
            Scroll,
            BackTop
        },
        data(){
            return{
                // 用于保存请求过来的数据
                banners:[],
                recommends:[],
                goods:{
                    'pop':{page:0,list:[]},
                    'new':{page:0,list:[]},
                    'sell':{page:0,list:[]}
                },
                currentType:'pop'
            }
        },
      computed:{
            showGoods(){
                return this.goods[this.currentType].list
          }
      },
        created() {
              //请求多个数据
            // created里面只写主要逻辑（只写发送什么请求，调用了哪个方法），
            // 具体的处理逻辑放到methods里面
            this.getHomeMultiData()
            // 一次性调用三个方法
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
      methods:{
            // 事件监听相关的方法
          tabClick(index){
            switch (index) {
                case 0:
                    this.currentType='pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }

          },
          BackTop(){
            this.$refs.scroll.scroll.scrollTo(0,0,500)
          },
          // 数据请求相关的方法
          getHomeMultiData(){
              getHomeMultiData().then(res=>{
                  // console.log(res);
                  this.banners = res.data.data.banner.list
                  this.recommends = res.data.data.recommend.list

              })
          },
          getHomeGoods(type){
                  // 动态获取页码
              const page=this.goods[type].page+1
              getHomeGoods(type,page).then(res=>{
                  // console.log(res)
                 // 怎么把获取到的数组放到另外一个数组里面（ push进去）
                  this.goods[type].list.push(...res.data.data.list)
                  this.goods[type].page += 1
              })
          },
          // getHomeGoods(type){
          //    const page=this.goods[type].page+1
          //     getHomeGoods(type,page).then(res=>{
          //         this.goods[type].list.push(...res.data.data.list)
          //         this.goods[type].page+=1
          //     })
          // }
      }
  }
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    position: relative;
  }
  .home-nav{
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    top:0;
    left: 0;
    z-index: 2;
    width: 100%;
  }
  .content{
    position: absolute;
    top:44px;
    bottom:49px;
    left: 0;
    right: 0;
  }
</style>

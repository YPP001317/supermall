<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img"/>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <div class="goods-tag">
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props:{
            goodsItem:{
                type:Object,
                default(){
                    return{}
                }
            }
        }
    }
</script>

<style scoped>
  .goods-item{
    width: 48%;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 6px 0;
  }

  .goods-tag{
    display: flex;
    justify-content: center;
    margin-bottom: 6px;
  }
  .goods-tag .price{
    margin-right: 10px;
    color:var(--color-tint)
  }
  .goods-tag .collect::before{
    content: '';
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    display: inline-block;
  }
</style>

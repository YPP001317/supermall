<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
    export default {
        name: "Scroll",
        data(){
            return{
                scroll:null,
            }
        },
        mounted() {
            this.scroll = new BScroll('.wrapper',{
                probeType:3,
                pullUpLoad:true,
                click:true
            })

        },
        // methods:{
        //    scrollTo(x, y, time=500){
        //        this.scroll.scrollTo(x, y, time)
        //     }
        // }

    }
</script>

<style scoped>

</style>

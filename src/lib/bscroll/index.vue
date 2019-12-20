<template>
    <div class="wrapper_f">
        <div class="scroll_loading" v-if="showLoading">
            <i class="fa fa-cog fa-spin"></i>
        </div>
        <div class="warpper" ref="wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    name:'kemeng-scroll',
    data(){
        return {
            showLoading:false,
            scroll:'',
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            //开启下拉刷新
            mouseWheel: true,
            pullDownRefresh: {
                threshold: 40,
                stop: 40
            },
            //开启上拉加载更多
            pullUpload:true,
            //onscroll的配置
            proType:1,
            tap:true,
            click:true
        });
            
        
    },
    methods:{
        handlepullingDown( callback){
            this.scroll.on('pullingDown',()=>{
                callback();
                this.scroll.finishPullDown()
                this.scroll.refresh();
            })
        },
        handlepullUp(callback){
            this.scroll.on('pullingUp',()=>{
                callback();
                this.scroll.finishPullUp();
                this.scroll.refresh();
            })

        },
        handleOnscroll(){
            this.scroll.on('scroll',({y})=>{
                if(y > -80){
                    this.showLoading =true
                }else if(y<-95){
                    this.showLoading =false
                }
            })
        }
    }
}
</script>
<style >
    .wrapper{
        width:100%;
        position:absolute;
        left:0;
        top:0;
        height:100%;
    }
    .scroll_loading{
        font-size:0.3rem;
        text-align:center;
    }
</style>
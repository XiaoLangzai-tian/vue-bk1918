<template>
    <div class="coming">
        <div class="nav_box">
            <p class="title">近期最受期待</p>
            <div class="movieNavList">
                <router-link tag="div" :to="'/detail/'+item.id+'/'+item.nm" class="littleMovie"  v-for="(item,index) in comingList" :key="index">
                    <div class="pic">
                        <img :src="item.img | toImg('128.180')" alt="">
                        <span class="many"><i>{{item.wish}}</i>人想看</span>
                    </div>
                    <h5 class="name">{{item.nm}}</h5>
                    <p class="date">{{item.comingTitle}}</p>
                </router-link>
            </div>
        </div>
        <div class="marCla"></div>
        <div class="exMovie">
            <router-link  tag="div" :to="'/detail/'+item.id+'/'+item.nm" class="exMovieList" v-for="(item,index) in bottomList" :key="index">
                <p class="group-date" v-if="showFlg(item)">{{item.comingTitle}}</p>
                <div class="content" >
                    <div class="picImg">
                        <img :src="item.img | toImg('128.180')" alt="">
                    </div>
                    <div class="message">
                        <h5 class="tit">{{item.nm}}</h5>
                        <div>
                            <span class="yellow">{{item.wish}}</span>
                            <span class="manPeo">人想看</span>
                        </div>
                        <div class="mainStar">{{item.star}}</div>
                        <div class="date_time">{{item.rt}}</div>
                        <div :class="item.showst === 1 ? ' wantSee Yellow ' : ' wantSee Blue ' ">{{item.showst === 1 ? '想看' : '预售'}}</div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import {movieCommingApi,movieCommingBottomApi} from '@api/movie.js'
export default {
    name:'Comming',
    data(){
        return {
            comingList:[],
            bottomList:[],
            typeId:1
        }
    },
    created(){
        this.getExpextedMovie();
        this.getExpextedBottom(this.$store.state.city.cityId);   
    },
    activated() {
        if(this.typeId  == this.$store.state.city.cityId){
            this.bottomList = JSON.parse(sessionStorage.getItem('comming'));
        }else{
            this.getExpextedBottom(this.$store.state.city.cityId);  
            this.typeId = this.$store.state.city.cityId
        }
    },
    methods:{
        async getExpextedMovie(){
            let data = await movieCommingApi()
            // console.log(data)
            this.comingList = data.coming;
        },
        async getExpextedBottom(cityId){
            let datainfo = await movieCommingBottomApi(cityId);
            this.bottomList = datainfo.coming;
            sessionStorage.setItem('comming',JSON.stringify(datainfo.coming))
        },
        showFlg(item){
            let position = this.bottomList.indexOf(item);
            if(position > 0){
                let prev = position - 1;
                if(this.bottomList[position].comingTitle !== this.bottomList[prev].comingTitle){
                    return true;
                }else{
                    return false;
                }
            }else{
                return true;
            }
        }
    }
}
</script>
<style scope>
    .coming{
        position : absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background:#fff;
        padding-top:1.57rem;
        padding-bottom:0.51rem;
        overflow-y: auto;
    }
    .coming::-webkit-scrollbar{
        display:none;
    }
    .coming img{
        width:100%;
        height:100%;
    }
    .coming .nav_box{
        width:4.02rem;
        height:2.14rem;
        padding:12px 0 12px 15px;
        background-color:#fff;
    }
    .coming .nav_box .title{
        margin: 0;
        font-size: 14px;
        color: #333;
        margin-bottom: 12px;
    }
    .coming .nav_box .movieNavList{
        width:3.87rem;
        height:1.6rem;
        background:red;
        background-color:#fff;
        display:flex;
        overflow-x: auto;
    }
    .movieNavList::-webkit-scrollbar{
        display:none;
    }
    .coming .nav_box .movieNavList .littleMovie{
        width:.85rem;
        height:1.57rem;
        background-color:#fff;
        margin-right:12px;
    }
    .coming .nav_box .movieNavList .littleMovie .pic{
        width:.85rem;
        height:1.15rem;
        position:relative;
        margin-bottom:6px;
    }
    .coming .nav_box .movieNavList .littleMovie .pic .many{
        position: absolute;
        height:14px;
        left: 4px;
        bottom: 4px;
        color: #faaf00;
        font-size: 11px;
        font-weight: 600;
    }
    .name{
        width:85px;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
        font-size: 13px;
        color: #222;
        margin-bottom: 3px;
    }
    .date{
        margin: 0;
        font-size: 12px !important;
        color: #999;
        height:16px;
        overflow:hidden;
    }
    .marCla{
        width:4.02rem;
        height:10px;
        background:#f5f5f5;
    }
    .exMovie{
        width:4.02rem;
        min-height:6rem;
    }
    .exMovie .exMovieList{
        width:100%;
        min-height:1.14rem;
    }
    .group-date{
        padding: 12px 15px 0;
        margin: 0;
        font-size: 14px;
        color: #333;
    }
    .exMovie .content{
        padding-left: 15px;
        background-color: #fff;
        height:1.14rem;
    }
    .picImg{
        width: 64px;
        height: 90px;
        position: relative;
        margin-top: 12px;
        float: left;
    }
    .message{
        padding: 12px 14px 12px 0;
        margin-left: 74px;
        height: 114px;
        border-bottom: 1px solid #fafafa;
        max-height: 114px;
        position: relative;
    }
    .tit{
        font-size: 17px;
        color: #333;
        font-weight: 700;
        padding-right: 5px;
        flex-shrink: 1;
        margin-bottom: 7px;
    }
    .manPeo{
        font-size: 13px;
        display: inline-block;
        color: #666;
        margin-left: 2px;
    }
    .yellow{
        color: #faaf00;
        font-size: 15px;
        font-weight: 600;
    }
    .mainStar{
        width:2.46rem;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        color: #666;
        margin-top: 6px;
        line-height: 15px;
    }
    .date_time{
        font-size: 13px;
        color: #666;
         margin-top: 3px;
    }
    .wantSee{
        position:absolute;
        top:50%;
        right:0;
        margin-top:-0.135rem;
        width:0.47rem;
        height:0.27rem;
        border-radius:3px;
        line-height:0.27rem;
        text-align:center;
        font-size:12px;
        color:#fff;
    }
    .Yellow{
        background-color: #faaf00;
    }
    .Blue{
        background-color: #3c9fe6;
    }
</style>
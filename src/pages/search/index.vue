<template>
    <div class="page search">
        <Header title="猫眼电影" icon/>
        <div class="searchBox">
            <div class="seaIpt">
                <img src="@assets/cat/search.png" alt="" class="searchPic">
                <input type="text" class="searchText" placeholder="搜电影、搜影院" v-model="value">
                <v-touch @tap="handleBack()" class="no">取消</v-touch>
            </div>
            <router-link tag="div" :to="'/detail/'+item.id+'/'+item.nm" class="case" v-for="(item,index) in list" :key="index">
                <div class="pic">
                    <img :src="item.img | toImg('128.180')" alt />
                </div>
                <div class="box">
                    <div class="con">
                        <div>{{item.nm}}</div>
                        <div>{{item.enm}}</div>
                        <div>{{item.cat}}</div>
                        <div>{{item.rt}}</div>
                    </div>
                    <!-- showst:4   预售  1想看 -->
                    <div :class="item.globalReleased?'sele red':bgc(item.showst)">{{item.globalReleased ? '购票' :ishas(item.showst)}}</div>
                    <div class='score'>
                        <span>{{item.globalReleased?item.sc:item.wish}}</span>{{item.globalReleased?'分':'人想看'}}
                    </div>
                </div>
            </router-link>
        </div>
    </div>
    <!-- globalReleased 购票 
        showst 1 想看 wish
    -->
</template>
<script>
import {searchMovieApi} from '@api/movie.js'
import {throttling} from '@utils/throttling.js'
export default {
    name:"Search",
    data(){
        return {
            value:'',
            list:[]
        }
    },
    beforeMount() {
        this.firstTime = 0;
    },
    watch: {
        //节流
        value(newval){
            throttling(async()=>{
                let data = await searchMovieApi(this.$store.state.city.cityId,newval)
                // console.log(data.data.movies.list)
                this.list = data.data.movies ? data.data.movies.list : [];
            },500)
            
        }
    },
    methods:{
        handleBack(){
            this.$router.back();
        },
        ishas(showst){
            if(showst == 1){
                return '想看'
            }else if(showst == 4){
                return '预售'
            }
        },
        bgc(showst){
            if(showst == 1){
                return 'sele yel'
            }else if(showst == 4){
                return 'sele blue'
            }
        },
    }
}
</script>
<style scope>
    .search{
        background-color: #fff;
        padding-bottom:0;
        overflow-y:auto;
    }
    .searchBox{
        height:100vh;
    }
    .seaIpt{
        width: 414px;;
        height:46px;
        padding: 8px 0 8px 10px;
        position:relative;
        border-bottom: 1px solid #e5e5e5;
        background:#f5f5f5;
    }
    .searchText{
        float:left !important;
       width:346px !important;
       height:28px !important;
       padding:0 4px !important;
       font-size: 13px !important;
       padding-left:30px !important;
       margin-bottom:0 !important;
    }
    .no{
        float:left;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        font-size: 16px;
        color: #f03d37;
    }
    .searchPic{
        width: 15px;
        height: 15px;
        left:20px;
        position: absolute;
        top:50%;
        margin-top:-9.5px;

    }



    .case {
        width: 100% !important;
        height: 1.14rem;
        background: #fff;
        padding-left: 0.15rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #fafafa;
    }
        .case .pic {
        width: 0.64rem;
        height: 0.9rem;
        background: tomato;
    }
        .case .pic img {
        width: 100%;
        height: 100%;
        border: 0;
    }
        .box {
        width: 3.46rem;
        height: 1.14rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #fafafa;
        margin-left: 5px;
        position: relative;
        }
        .case .con {
            width: 2.13rem;
            height: 0.87rem;
            margin: 0 5px;
        }
        .case .con div:nth-child(1) {
            font-size: 17px;
            color: #333;
            font-weight: 700;
            padding-right: 5px;
            flex-shrink: 1;
            margin-bottom: 7px;
            display: flex;
        }
        .case .con div:nth-child(1) i {
            padding-top: 1px;
        }
        .case .con div:nth-child(1) img {
            width: 0.41rem;
            height: 0.14rem;
            border: 0;
            margin-left: 5px;
        }
        .case .con div:nth-child(2) {
            font-size: 13px;
            color: #666;
        }
        .case .con div:nth-child(2) span {
            font-weight: 700;
            color: #faaf00;
            font-size: 15px;
            margin-left: 5px;
        }
        .case .con div:nth-child(3) {
            font-size: 13px;
            color: #666;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .case .con div:nth-child(4) {
            font-size: 13px;
            color: #666;
        }
        .case .sele {
            width: 0.47rem;
            height: 0.27rem;
            border-radius: 3px;
            color: #fff;
            font-size: 0.12rem;
            line-height: 0.27rem;
            text-align: center;
            position: absolute;
            top: 50%;
            margin-top: -0.135rem;
            right: 10px;
        }
        .case .red {
             background: #e54847;
        }
        .case .blue {
            background-color: #3c9fe6;
        }
        .case .yel{
            background-color: #faaf00;
        }
        .score{
            min-width:0.56rem;
            height:0.22rem;
            color: #fa0;
            font-size: 10px;
            position:absolute;
            right:10px;
            top:10px;
            text-align:right;
        }
        .score span{
            font-size: 16px;
            margin-right:1px;
        }
</style>
    <template>
        <div class="page">
            <Header title="影院" />
            <section class="topbar">
                <router-link to="/city" tag="div" class="addselect">
                    <span>北京</span>
                    <i class="iconfont">&#xe642;</i>
                </router-link>
                <router-link to="/search" tag="div" class="search-entry search-input" data-type="cinema">
                   <i class="iconfont">&#xe63d;</i>
                    <span>搜影院</span>
                </router-link>
            </section>
            <section class="cinemContent">
                <div class="selectadd">
                    <ul>
                        <li>全城 <i class="iconfont">&#xe642;</i></li>
                        <li>品牌 <i class="iconfont">&#xe642;</i></li>
                        <li>特色 <i class="iconfont">&#xe642;</i></li>
                    </ul>
                </div>
                <main>
                    <div class="items">
                        <p>大地院线影城（珠江摩尔店）<span><i>33</i><i>元起</i></span></p>
                        <p><span>昌平区回龙观镇北清路1号院7号楼内7-101-26</span><span>3.9km</span></p>
                        <p>
                            <span class="dan">退</span>
                            <span class="shuang">改签</span>
                            <span class="eat">小吃</span>
                            <span class="zhe">折扣卡</span>
                        </p>
                        <p><i class="ka"><img src="../../assets/cat/ka.png"></i>开卡特惠，首单2张最高立减6元</p>
                    </div>
                </main>
            </section>
        </div>
    </template>
    <script>
    import {cinemaListApi} from '@api/movie.js'
    export default {
        name:"cinema",
        data(){
            return {
                cinemaList:[]
            }
        },
        async created(){
            let data = cinemaListApi(10);
            console.log(data)
        }
    }
    </script>
    <style scope>
        .cinemContent{
            height:100%;
            position:relative;
        }
        .topbar {
            border-bottom: 1px solid #e6e6e6;
            height: 44px;
            display:flex;
            align-items: center;
            background: #f5f5f5;
            flex-shrink:0;
        }
        .addselect{
            width:62px;
            height:20px;
            padding-left:15px;  
            display:flex;
            align-items: center;
        }
        .addselect span{
            display: inline-block;
            width:30px;
            height:20px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            font-size: 15px;
            color: #666;
        }
        .addselect i{
            display:inline-block;
            width:8px;
            height:8px;
            font-size:8px;
            line-height:8px;
            text-align:center;
            margin-left:4px;
            color: #666;
        }
        .search-input {
            display: -webkit-box;
            display: flex;
            background-color: #fff;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            height: 28px;
            font-size: 13px;
            color: #b2b2b2;
            margin-left: 18px;
            border: .5px solid #e6e6e6;
            border-radius: 5px;
            margin-right: 15px;
            -webkit-box-flex: 1;
            flex-grow: 1;
        }
        .search-input i{
            font-size:15px;
            margin-right:3px;
        }
        .selectadd{
            width:100%;
            height:0.4rem;
            position:fixed;
            top:0.94rem;
            left:0;
            background:#fff;
            border-bottom:1px solid #f0f0f0;
            z-index:1;
        }
        .selectadd ul{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .selectadd ul li{
            width: 100%;
            height: 100%;
            font-size: 13px;
            color:#777;
            display:flex;
            justify-content: center;
            align-items: center;
            position:relative;
        }
        .selectadd ul li:nth-child(2):before{
            content: "";
            display: block;
            position: absolute;
            height: 20px;
            top: 10px;
            left: 0;
            border-left: 1px solid #e8e8e8;
        }
        .selectadd ul li:nth-child(3):before{
            content: "";
            display: block;
            position: absolute;
            height: 20px;
            top: 10px;
            left: 0;
            border-left: 1px solid #e8e8e8;
        }
        .selectadd ul li i{
            height:8px;
            width:8px;
            line-height:8px;
            font-size:8px;
            margin-left:5px;
        }

        .cinemContent main{
            overflow-y:auto;flex-shrink:0;padding-top:0.4rem;height:96.48%;
        }
        .items{
            width:94%;height:1.24rem;padding: 13px 15px 13px 0;margin-left:15px;border-bottom:1px solid #f9f9f9
        }
        .items p:nth-child(1){
            height: 23px;line-height: 23px;font-size: 16px;color: #000;
        }
        .items p:nth-child(1) i:nth-child(1){
            font-size: 18px;color: #f03d37;
        }
        .items p:nth-child(1) i:nth-child(2){
            font-size: 11px;color: #f03d37;
        }
        .items p:nth-child(2){
            margin-top: 6px;font-size: 13px;color: #666;display:flex;justify-content: space-between;
            margin-bottom:0 !important;
            
        }
        .items p:nth-child(2) span:nth-child(1){
            width:340px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        .items p:nth-child(2) span:nth-child(2){
            margin-left:5px;
        }
        .items p:nth-child(3){
            margin-top: 4px;margin-bottom: 4px;
        }
        .items p:nth-child(3) span{
            margin:0 2px;
        }
        .items p:nth-child(3) .dan,.shuang{
            position: relative;display: inline-block;padding: 0 3px;height: 15px;line-height: 12px;border-radius: 2px;font-size: 0.12rem;
            color: #589daf;border: 1px solid #589daf;
        }
        .items p:nth-child(3) .eat,.zhe{
            position: relative;display: inline-block;padding: 0 3px;height: 15px;line-height: 13px;border-radius: 2px;font-size: 0.12rem;
            color: #f90;border: 1px solid #f90;
        }
        .items p:nth-child(4){
            font-size:11px;color:#999;display:flex;align-items: center;
        }
        .ka{
            width:0.15rem;height:0.15rem;margin-right:3px;
        }
        .ka img{
           width:0.15rem;height:0.15rem;border:0;
        }
    </style>
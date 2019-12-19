    <template>
        <div class="page">
            <Header title="猫眼电影"/>
            <div class="download-app-bar">
                <img class="img noneBg logo" alt="logo" src="../../assets/cat/logo.png" width="42" height="42">
                <div class="app-name-desc"><div class="app-name">猫眼</div><div class="app-desc">在线选座，热门影讯，爱上看电影</div></div>
                <div class="btn-open-app">立即打开</div>
            </div>
            <div class="add">
                <router-link tag="div" :to="'/city?path='+this.$route.path" class="addsel">
                    <span>{{this.$store.state.city.nm}}</span>
                    <i class="iconfont">&#xe642;</i>
                </router-link>
                <div class="addMiddle">
                    <router-link to="/movie/hot" tag="div">正在热映</router-link>
                    <router-link to="/movie/comming" tag="div">即将放映</router-link>
                </div>
                <router-link to="/search" tag="div" class="addRight">
                    <i class="iconfont">&#xe63d;</i>
                </router-link>
            </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </template>
    <script>
    export default {
        name:"movie",
        methods:{
        }
    }
    </script>
    <style>
        .router-link-active{
            color: #ef4238;
            border-bottom:1px solid #ef4238;
        }
        .nav-header{
            display: block;
            -webkit-box-flex: 1;
            font-size: 18px;
            font-weight: 400;
            text-align: center;
            line-height: 50px;
            margin: 0;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .download-app-bar {
            position: relative;
            height: 63px;
            background-color: #fff;
            border-bottom: 1px solid #e6e6e6;
            z-index:2;
        }
        .download-app-bar img.logo {
            position: absolute;
            left: 15px;
            top: 11px;
            width: 44px;
            height: 44px;
        }
        .download-app-bar .app-name-desc {
            position: absolute;
            left: 66px;
            top: 13px;
        }
        .download-app-bar .app-name-desc .app-name {
            font-size: 17px;
            color: #222;
            line-height: 23px;
        }
        .download-app-bar .app-name-desc .app-desc {
            font-size: 12px;
            color: #999;
        }
        .download-app-bar .btn-open-app {
            position: absolute;
            right: 15px;
            top: 17px;
            width: 68px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background: #ef4238;
            border-radius: 3px;
            font-size: 13px;
            color: #fff;
        }
        
        .add{
            width:100%;
            height:44px;
            border-bottom: 1px solid #e6e6e6;
            display:flex;
            align-items: center;
            justify-content: space-between;
            position:relative;
            z-index:2;
            background:#fff;
        }
        .add .addsel{
            width:62px;
            height:20px;
            padding-left:15px;  
            display:flex;
            align-items: center;
        }
        .add .addsel span{
            display: inline-block;
            width:30px;
            height:20px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            font-size: 15px;
            color: #666;
        }
        .add .addsel i{
            display:inline-block;
            width:8px;
            height:8px;
            font-size:8px;
            line-height:8px;
            text-align:center;
            margin-left:4px;
            color: #666;
        }
        .add .addMiddle{
            width:224.63px;
            height:100%;
            display:flex;
        }
        .add .addMiddle div{
            width: 21.33333vw;
            font-size:15px;
            height:44px;
            margin: 0 12px;
            font-weight: 700;
            text-align:center;
            line-height:44px;
        }
        .add .addRight{
            width:45px;
            height:40px;
            text-align:center;
            line-height:40px;
        }
        .add .addRight i{
            width:20px;
            height:20px;
            line-height:20px;
            display:inline-block;
            font-size:20px;
            color: #ef4238;
        }
    </style>
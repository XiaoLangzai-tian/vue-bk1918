    <template>
        <div class="foot" >
            <router-link tag="div" 
            class="foot_con" 
            v-for="item in tabNav" :key="item.id"
            :to="item.path">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
            </router-link>
        </div>
    </template>
    <script>
    export default {
        name:"Foot",
        data(){
            return {
                tabNav:[
                    {
                        id:0,
                        icon:"iconfont icon-dianying",
                        name:'电影',
                        path:'/movie'
                    },
                    {
                        id:1,
                        icon:"iconfont icon-yingyuan",
                        name:'影院',
                        path:'/cinema'
                    },
                    {
                        id:2,
                        icon:"iconfont icon-iconfuzhi",
                        name:'我的',
                        path:'/mine'
                    }
                ]
            }
        }
    }
    </script>
    <style>
        .foot{
            z-index:2;
            position: fixed;
            bottom: 0;
            width: 100%;
            height:48.5px;
            background: #fff;
            border-top: .5px solid #d8d8d8;
            display: flex;
            justify-content: space-around;
        }
        .foot .foot_con{
            float: left;
            width: 138px;
            height: 48px;
            line-height: 48px;
            position: relative;
            text-align: center;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .foot .router-link-active{
            color: #f03d37;
            border-bottom:none;
        }
        .foot .foot_con i{
            font-size:25px;
            height:25px;
            text-align: center;
            line-height:25px;
        }
        .foot .foot_con span{
            margin-top:5px;
            font-size:10px;
            height:10px;
            text-align: center;
            line-height:10px;
        }
    </style>
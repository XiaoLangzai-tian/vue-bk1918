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
        </div>
    </template>
    <script>
    export default {
        name:"cinema"
    }
    </script>
    <style scope>
        .topbar {
            border-bottom: 1px solid #e6e6e6;
            height: 44px;
            display:flex;
            align-items: center;
            background: #f5f5f5;
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
            font-size:15px;margin-right:3px;
        }
    </style>
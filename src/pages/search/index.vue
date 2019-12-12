<template>
    <div class="page search">
        <Header title="猫眼电影" icon/>
        <div class="searchBox">
            <div class="seaIpt">
                <img src="@assets/cat/search.png" alt="" class="searchPic">
                <input type="text" class="searchText" placeholder="搜电影、搜影院">
                <div class="no">取消</div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name:"Search"
}
</script>
<style scope>
    .search{
        background-color: #f5f5f5;
        padding-bottom:0;
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
</style>
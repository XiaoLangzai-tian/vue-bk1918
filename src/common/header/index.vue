<template>
    <div class="navbar">
        <v-touch
            tag="div"
            @tap="handleBack()"
        >
            <i class="iconfont icon-yiliaohangyedeICON-" v-if="icon"></i>
        </v-touch>
        
        <h1 class="nav-header" >{{title}}</h1>
    </div>
</template>
<script>
export default {
    name:'Header',
    props:{
        title:{
            type:String,
            default:'猫眼电影'
        },
        icon:{
            type:Boolean,
        }
    },
    methods:{
        handleBack(){
            this.$router.back();
        }
    }
}
</script>
<style>
    
    .navbar{
        width:100%;
        height:50.5px;
        line-height:57.5px;
        color: #fff;
        background: #e54847;
        border-bottom: 1px solid #e54847;
        display: -webkit-box;
        display: -ms-flexbox;
        position: absolute;
        top:0;
        left:0;
        z-index:2;
        font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    }
    .navbar i{
        height:20px;
        font-size:20px;
        line-height:20px;
        text-align:center;
        position:absolute;
        left:15px;
        top:15px;
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
</style>
<template>
  <div class="hot">
      <main>
        <div class="case" v-for="(item,index) in list" :key="index">
            <div class="pic">
                <img :src="item.pic" alt="">
            </div>
            <div class="box">
                <div class="con">
                    <div>
                        {{item.name}}
                        
                    </div>
                    <div>{{item.ping}}<span>{{item.score}}</span></div>
                    <div>{{item.main}}</div>
                    <div>{{item.cinema}}</div>
                </div>
                <div class="sele">{{item.ticket}}</div>
            </div>
        </div>
      </main>
  </div>
</template>
<script>
export default {
  name: "Hot",
    data(){
        return {
            list:[
                {
                    pic:"https://p0.meituan.net/128.180/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg",
                    name:"少年的你",
                    ping:"观众评",
                    score:"9.5",
                    main:"主演:周冬雨,易烊千玺,尹昉",
                    cinema:"今天228家影院放映3213场",
                    ticket:"购票",
                    // two:"2d.png"
                },
                {
                    pic:"https://p0.meituan.net/128.180/movie/b932f7f678a3e28763b3b281b3e120ef13622509.jpg",
                    name:"终结者：黑暗命运",
                    ping:"观众评",
                    score:"8.7",
                    main:"主演:阿诺德·施瓦辛格,琳达·汉密尔顿,麦肯兹·戴维斯",
                    cinema:"今天222家影院放映2735场",
                    ticket:"购票",
                    // two:"2d.png"
                },
                {
                    pic:"https://p0.meituan.net/128.180/movie/ecca4f0b95340b2c57006a1bace4c3f91386100.jpg",
                    name:"天气之子",
                    ping:"观众评",
                    score:"9.2",
                    main:"主演:醍醐虎汰朗,森七菜,本田翼",
                    cinema:"今天227家影院放映2076场",
                    ticket:"购票",
                    // two:"2d.png"
                },
                {
                    pic:"https://p0.meituan.net/128.180/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg",
                    name:"中国机长",
                    ping:"观众评",
                    score:"9.4",
                    main:"主演: 张涵予,欧豪,杜江",
                    cinema:"今天166家影院放映437场",
                    ticket:"购票",
                    // two:"2d.png"
                },
                {
                    pic:"https://p1.meituan.net/128.180/moviemachine/c68e3fff79463952b33cbc1e1b45442b1772992.jpg",
                    name:"沉睡魔咒",
                    ping:"观众评",
                    score:"9.1",
                    main:"主演: 安吉丽娜·朱莉,艾丽·范宁,切瓦特·埃加福特",
                    cinema:"今天145家影院放映363场",
                    ticket:"购票",
                    // two:"2d.png"
                },
                {
                    pic:"https://p1.meituan.net/128.180/moviemachine/c68e3fff79463952b33cbc1e1b45442b1772992.jpg",
                    name:"沉睡魔咒",
                    ping:"观众评",
                    score:"9.1",
                    main:"主演: 安吉丽娜·朱莉,艾丽·范宁,切瓦特·埃加福特",
                    cinema:"今天145家影院放映363场",
                    ticket:"购票",
                    // two:"2d.png"
                },
            ]
        }
    }
};
</script>
<style scope>
.hot{
    position: absolute;
    width: 100%;
    height: 592.5px;
    margin-top:107px;
}
.nav{
    width:100%;height:0.44rem;position:fixed;left:0;top:0.50rem;
    display:flex;align-items: center;justify-content: space-between;font-size:0.15rem;
    font-weight:bold;border-top:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;
    background:#fff;
}
.nav span{
    display:flex;justify-content: center;align-items: center;color:#666;
}
.nav span:nth-child(2){
    border-bottom:1px solid #e54847;color:#e54847;
}
.nav .ing{
    width:0.8rem;height:0.44rem;margin:0 0.12rem;
}
.nav .add{
    width:0.62rem;height:0.2rem;
}
.nav .add i:nth-child(1){
    margin-right:5px;font-style:normal;
}
.nav .search{
    width:0.45rem;height:0.4rem;
}
main{
    height:100%;
    overflow-y: auto;
    flex:1;
}
main::-webkit-scrollbar{
    display:none;
}
.case{
    width:3.64rem;height:1.14rem;background:#fff;padding-left:0.15rem;
    display:flex;align-items: center;
}
.case .pic{
    width:0.64rem;height:0.9rem;background:tomato;
}
.case .pic img{
    width:100%;height:100%;border:0;
}
.box{
    width:2.75rem;height:1.14rem;display:flex;align-items: center;
    border-bottom:1px solid #fafafa;margin-left:5px;
}
.case .con{
    width:2.13rem;height:0.87rem;margin:0 5px;
}
.case .con div:nth-child(1){
    font-size: 17px;
    color: #333;
    font-weight: 700;
    padding-right: 5px;
    flex-shrink: 1;
    margin-bottom:7px;
    display:flex;
}
.case .con div:nth-child(1) i{
    padding-top:1px;
}
.case .con div:nth-child(1) img{
    width:0.41rem;height:0.14rem;border:0;margin-left:5px;
}
.case .con div:nth-child(2){
    font-size: 13px;
    color: #666;
}
.case .con div:nth-child(2) span{
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
    margin-left:5px;
}
.case .con div:nth-child(3){
    font-size: 13px;
    color: #666;
    margin-top:6px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.case .con div:nth-child(4){
    font-size: 13px;
    color: #666;
    margin-top:6px;
}
.case .sele{
    width:0.47rem;height:0.27rem;border-radius:2px;background:#e54847;
    color:#fff;font-size:0.12rem;line-height:0.27rem;text-align:center;
}
</style>
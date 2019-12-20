<template>
  <kemeng-scroll ref="scroll" >
    <div class="hot">
      <main class="main">
        <router-link tag="div" class="case" :to="'/detail/'+item.id+'/'+item.nm" v-for="(item,index) in list " :key="index">
          <div class="pic">
            <img :src="item.img | toImg('128.180')" alt />
          </div>
          <div class="box">
            <div class="con">
              <div>{{item.nm}}</div>
              <div>
                观众评
                <span>{{item.sc}}</span>
              </div>
              <div>{{item.star}}</div>
              <div>{{item.showInfo}}</div>
            </div>
            <div
              :class="item.globalReleased ? 'sele red' : 'sele blue'"
            >{{item.globalReleased ? '购票' : '预售'}}</div>
          </div>
        </router-link>
      </main>
    </div>
  </kemeng-scroll>
</template>
<script>
import { movieNowApi} from "@api/movie.js";
export default {
  name: "Hot",
  data() {
    return {
      list: [],
      typeId:1
    };
  },
  created() {
    this.getMovieList(this.$store.state.city.cityId);
  },
  activated() {
    if(this.typeId == this.$store.state.city.cityId){
      this.list = JSON.parse(sessionStorage.getItem('movieList'))
    }else{
      this.getMovieList(this.$store.state.city.cityId);
      this.typeId = this.$store.state.city.cityId;
    }
  },
  watch:{
      // list(){
      //   this.$refs.scroll.handleFinashpullDown();
      // }
  },
  methods: {
    async getMovieList(params) {
      let data = await movieNowApi(params);
      // console.log(data.movieList)
      this.list = data.movieList;
      sessionStorage.setItem('movieList',JSON.stringify(data.movieList));
    }
  },


  mounted(){
      this.$refs.scroll.handlepullingDown(()=>{
          let arr =[10,20,42,50,56,60]
          let index = parseInt(0+Math.random()*6)
          this.getMovieList(arr[index])
      });
      this.$refs.scroll.handlepullUp(()=>{
        console.log(111)
      });

      this.$refs.scroll.handleOnscroll();
  }
};
</script>
<style scope>
.hot {
  position: absolute;
  width: 100%;
  min-height: 592.5px;
  margin-top: 107px;
  padding-bottom: 62px;
}
.nav {
  width: 100%;
  height: 0.44rem;
  position: fixed;
  left: 0;
  top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.15rem;
  font-weight: bold;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  background: #fff;
}
.nav span {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
}
.nav span:nth-child(2) {
  border-bottom: 1px solid #e54847;
  color: #e54847;
}
.nav .ing {
  width: 0.8rem;
  height: 0.44rem;
  margin: 0 0.12rem;
}
.nav .add {
  width: 0.62rem;
  height: 0.2rem;
}
.nav .add i:nth-child(1) {
  margin-right: 5px;
  font-style: normal;
}
.nav .search {
  width: 0.45rem;
  height: 0.4rem;
}
.main {
  height: 100%;
  overflow-y: auto;
  flex: 1;
}
.main::-webkit-scrollbar {
  display: none;
}
.case {
  width: 4rem;
  height: 1.14rem;
  background: #fff;
  padding-left: 0.15rem;
  display: flex;
  align-items: center;
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
</style>
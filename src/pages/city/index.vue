<template>
    <div class="city" ref="city_container">
        <section class="city_position">
        <div id="locate" class="city-title">定位城市</div>
        <div class="city-list city-list-inline clearfix">
            <div class="location-city">定位失败，请点击重试</div>
        </div>
        </section>
        <section>
        <div id="hot" class="city-title">热门城市</div>
        <div class="city-list city-list-inline clearfix">
            <div
            class="city-item"
            data-nm="上海"
            data-id="10"
            v-for="(item,index) in hotCity"
            :key="index"
            >{{item.nm}}</div>
        </div>
        </section>
        <!--城市列表-->
        <div class="city_list" ref="cityList">
            <div class="city_list_item"  v-for="(item,index) in cityList" :key ="index">
                <div class="city_title_letter">{{item.word}}</div>
                <v-touch tag="div" @tap="handleTo(child)" class="city_list_name" v-for="child in item.list" :key="child.id">
                    <div>{{child.nm}}</div>
                </v-touch>
            </div>
        </div>
        <section class="nav_fix">
        <div class="nav-item" data-id="locate">定位</div>

        <div class="nav-item" data-id="history">最近</div>

        <div class="nav-item" data-id="hot">热门</div>

        <v-touch @tap="handleSel(index)" class="nav-letter nav-item" data-id="A" v-for="(item,index) in cityList" :key="index">{{item.word}}</v-touch>
        </section>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "City",
  created() {
    if(!(sessionStorage.getItem('cityList') && sessionStorage.getItem('hotCity'))){
        this.$store.dispatch("city/handleActionCityList");
    }
  },
  computed: {
    ...mapState({
      hotCity: state => state.city.hotCity,
      cityList:state=> state.city.cityList
    })
  },
  methods:{
      handleSel(index){
        //   console.log(index)
        let data =this.$refs.cityList.getElementsByClassName('city_title_letter')[index].offsetTop;
        
        this.$refs.city_container.scrollTop=data
      },
      handleTo(item){
        let path= this.$route.query.path || '/movie'
        this.$router.push(path)
        this.$store.commit('city/handleCityRender',item)
      }
  }
};
</script>
<style scope>
.city {
  background-color: #ebebeb;
  font-size: 14px;
  color: #333;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1000;
  overflow-y: auto;
}
.city_position {
  width: 100%;
  height: 0.86rem;
}
.city-title {
  padding-left: 15px;
  line-height: 30px;
}
.city-list-inline {
  background-color: #f5f5f5;
  padding-bottom: 8px;
}
.city-list-inline .location-city {
  width: auto;
  min-width: 45%;

  padding: 0 20px;
}
.city-list {
  padding-right: 30px;
  overflow: hidden;
}
.city-list-inline .city-item,
.city-list-inline .location-city {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 4%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.nav_fix {
    position: fixed;
    top: 75px;
    top: 11vh;
    right: 0;
    width: 35px;
    z-index: 99999;
    text-align: center;
    font-size: 12px;
}
.hot_title,
.city_title_letter {
  line-height: 0.2rem;
  padding-left: 0.26rem;
  font-size: 0.14rem;
}

.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.08rem;
  padding-top: 0.08rem;
  padding-right: 0.6rem;
  padding-left:0.2rem;
  display: flex;
  flex-wrap: wrap;
  line-height:
}
.hot_city_name {
  margin-top: 0.3rem;
  margin-left: 0.26rem;
  width: 1.9rem;
  height: 0.66rem;
  background: #fff;
  text-align: center;
  line-height: 0.66rem;
  font-size: 0.28rem;
  border: 2px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
    border-bottom: 2px solid #c8c7cc;
  font-size: 0.28rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: 1rem;
}
.city_list_index > div {
  padding: 0.1rem 0.05rem;
  font-size: 0.25rem;
}
</style>
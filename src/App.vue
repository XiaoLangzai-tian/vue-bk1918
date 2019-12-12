  <template>
    <div id="app">
      <Tabbar v-if="$route.meta.flg"/>
      <router-view></router-view>
    </div>
  </template>
  <script>
  import Tabbar from './common/tabbar'
  export default {
    name: 'app',
    components:{
      Tabbar,
    },
    created(){
    },
  }
  </script>

  <style>
    .page{
      height:100%;
      position:absolute;
      left:0;
      top:0;
      bottom:0;
      right:0;
      padding-bottom:48.5px;
      padding-top:50.5px;
      display:flex;
      flex-direction: column;
    }
  </style>

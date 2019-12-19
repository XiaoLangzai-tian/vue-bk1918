export default {
    path:'/detail/:id/:nm',
    name:'detail',
    props:true,
    component:()=>import('@pages/detail'),
    meta:{
        flg:false
    }
}
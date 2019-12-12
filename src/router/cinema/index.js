export default {
    path:'/cinema',
    component:()=>import("@pages/cinema"),
    name:'cinema',
    meta:{
        flg :true,
        requireAuth:false
    }
}
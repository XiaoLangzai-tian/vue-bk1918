export default {
    path:'/movie',
    component:()=>import("@pages/movie"),
    name:'movie',
    meta:{
        flg :true,
        requireAuth:false
    }
}
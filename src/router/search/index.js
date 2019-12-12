export default {
    path:'/search',
    name:'search',
    component:()=>import('@pages/search'),
    meta:{
        flg :false,
        requireAuth:false
    },
}
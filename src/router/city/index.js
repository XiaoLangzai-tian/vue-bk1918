export default {
    path:'/city',
    name:'city',
    component:()=>import('@pages/city'),
    meta:{
        flg :false,
        requireAuth:false
    },
}
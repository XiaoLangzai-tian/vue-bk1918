export default {
    path:'/movie',
    component:()=>import("@pages/movie"),
    name:'movie',
    meta:{
        flg :true,
        requireAuth:false
    },
    children:[
        {
            path:'/movie',
            redirect:'/movie/hot'
        },
        {
            path:'hot',
            name:'Hot',
            component:()=>import('@components/hot'),
            meta:{
                flg :true,
                requireAuth:false
            }
        },
        {
            path:'comming',
            name:'Comming',
            component:()=>import('@components/comming'),
            meta:{
                flg:true,
                requireAuth:false
            }
        }
    ]
}
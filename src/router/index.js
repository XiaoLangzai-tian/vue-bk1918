import Vue from 'vue';
import VueRouter from 'vue-router';
import movie from './movie'
import cinema from './cinema'
import search from './search'
import city from './city'

Vue.use(VueRouter);


const router = new VueRouter({
    mode : 'hash',
    routes:[
        {
            path:'/',
            redirect:'/movie',
        },
        movie,
        cinema,
        search,
        city,
        {
            path:'/mine',
            name:'mine',
            component:()=>import("@pages/mine"),//异步加载组件
            meta:{
                flg:true,
                requireAuth:true
            }
        },
        {
            path:'/login',
            name:'login',
            component:()=>import("@pages/login"),
            meta:{
                flg:false
            }
        },
        
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.path !='/login' && to.meta.requireAuth == true){
        if(localStorage.getItem('token')){
            next();
        }else{
            next({name:'login',params:{to:to.path}})
        }
    }else{
        next();
    }
})



export default router;
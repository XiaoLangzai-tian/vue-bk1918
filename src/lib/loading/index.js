import LoadingView from './index.vue'
import Vue from 'vue';
class JSloading{
    constructor(){
        let loadingFn = Vue.extend(LoadingView);
        this.loadingVw=new loadingFn({
            //不在挂载在根组件上。二是自己选择挂载点
            el:document.createElement("div"),
        })
    //     console.log(this.loadingVw)
    }
    loadingMount(){
        document.body.appendChild(this.loadingVw.$mount().$el);
    }
    loadingDestroy(){
        if(document.getElementsByClassName('loading_box')[0]){
            document.body.removeChild(this.loadingVw.$mount().$el);
        }else{
            return 
        }
        
    }
}

export default new JSloading();
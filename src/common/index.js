import Vue from "vue"
import Header from './header'

let componentsMap = [
    Header
];

//全局组件的注册

componentsMap.forEach(item=>{
    Vue.component(item.name,item)
})
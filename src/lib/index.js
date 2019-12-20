import Header from './header'
import Bscroll from './bscroll'
import Loading from './loading'

let componentsMiddle = [
    Header,
    Bscroll
]


const install= (Vue)=>{
    componentsMiddle.forEach(item=>{
        Vue.component(item.name,item)
    })
}
export default {
    install,
    Loading

}
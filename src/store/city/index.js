import {cityApi} from '@api/city'
let state = {
    //
    hotCity:JSON.parse(sessionStorage.getItem('hotCity')) || [],
    cityList:JSON.parse(sessionStorage.getItem('cityList')) || [],
    nm:JSON.parse(sessionStorage.getItem('address')) ||'北京',
    cityId:JSON.parse(sessionStorage.getItem('typeId')) || 1
}
let actions = {
    async handleActionCityList({commit}){
        let data = await cityApi();
        commit('handleMutationCityList',data.data.cities)
    }
}
let mutations = {
    handleMutationCityList(state,data){
        // console.log(data);
        //热门城市
        let hotCity = [] ;
        let cityList = [];
        for(let item of data){
            if(item.isHot){
                hotCity.push(item)
            }
        }
        // console.log(hotCity)
        /**
         * cityList=[
              {
                  word:
                  list:[]
                }
         * ]
        */
        for(let item of data){
            let FirstWord = item.py.slice(0,1).toUpperCase();
           if(isHas(FirstWord)){
               //不存在
                cityList.push({
                    word:FirstWord,
                    list:[{id:item.id,nm:item.nm,isHot:item.isHot,py:item.py}]
                })
           }else{
               //存在
                for(let down of cityList){
                    if(down.word == FirstWord){
                        down.list.push(item)
                        break;
                    }
                }
           }
        }

        function isHas (FirstWord){
            let has = true;
            for(let item of cityList){
                if(item.word === FirstWord){
                    has = false;
                    break;
                }
            }
            return has
        }

        cityList.sort((a,b)=>{
            if(a.word >b.word){
                return 1;
            }else{
                return -1;
            }
        })
        console.log(cityList)
        state.hotCity = hotCity;
        state.cityList = cityList;
        sessionStorage.setItem('hotCity',JSON.stringify(hotCity));
        sessionStorage.setItem('cityList',JSON.stringify(cityList));
    },
    handleCityRender(state,params){
        state.cityId = params.id;
        state.nm = params.nm;
        sessionStorage.setItem('address',JSON.stringify(params.nm));
        sessionStorage.setItem('typeId',JSON.stringify(params.id));
    }
}


export default {
    state,
    actions,
    mutations,
    namespaced:true
}
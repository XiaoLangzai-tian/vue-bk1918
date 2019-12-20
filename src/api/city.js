import http from '@utils/request'

 /**
 * @detail
 * params:
 * 城市
 * 
 */
export const cityApi =()=>http({
    method:'get',
    url:'/kemeng/api/cityList'
})

 /**
 * @detail
 * params:
 * 城市定位
 * /api/getLocation
 */
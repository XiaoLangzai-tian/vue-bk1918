import http from '@utils/request';
/**
 * @pages
 * 正在上映接口
 * 
*/
export const movieNowApi = (cityId)=>http({
    method:'get',
    url:'/ajax/movieOnInfoList',
    data:{
        cityId:cityId
    }
})
let _url = '/ajax/mostExpected?ci=1&limit=10&offset=0&token=&optimus_uuid=A3752B50FF1211E9B696A90282C60F25DF81DF9776F94EA997502A364A20EBC6&optimus_risk_level=71&optimus_code=10';
export const movieCommingApi = ()=>http({
    method:'get',
    url:_url,
    // data:{
    //     'ci=1&limit=10&offset=0&token=&optimus_uuid=A3752B50FF1211E9B696A90282C60F25DF81DF9776F94EA997502A364A20EBC6&optimus_risk_level=71&optimus_code':ecId
    // }
})
/**
 * @pages
 * 即将上映接口
 * 
*/
export const movieCommingBottomApi = (cityId)=> http({
    method:'get',
    url:'/ajax/comingList',
    data:{
        ci: 1,
        token: '',
        limit: 10,
        optimus_uuid: 'A3752B50FF1211E9B696A90282C60F25DF81DF9776F94EA997502A364A20EBC6',
        optimus_risk_level: 71,
        optimus_code: cityId,
    }
})

/**
 * @detail
 * 详情页
 * 
 */
 
// let _brl = '/ajax/cinemaList?day=2019-12-18&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1576678927069&cityId=1&optimus_uuid=A3752B50FF1211E9B696A90282C60F25DF81DF9776F94EA997502A364A20EBC6&optimus_risk_level=71&optimus_code=10'
export const detailApi = ()=>http({
    mothod:'get',
    url:'/ajax/cinemaList',
    data:{
        day: 2019-12-18,
        offset: 0,
        limit: 20,
        districtId: -1,
        lineId: -1,
        hallType: -1,
        brandId: -1,
        serviceId: -1,
        areaId: -1,
        stationId: -1,
        item: '',
        updateShowDay: true,
        reqId: 1576678927069,
        cityId: 1,
        optimus_uuid: 'A3752B50FF1211E9B696A90282C60F25DF81DF9776F94EA997502A364A20EBC6',
        optimus_risk_level: 71,
        optimus_code: 10
    }
})
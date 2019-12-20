    //对axios的二次封装
    import axios from "axios"
    //在这里使用
    // import loading from '../lib/loading/index.js'
    import KemengUI from '../lib'
    const server = axios.create({
        timeout:5000,
        // baseUrl:""//工作中用的上
        withCredentials:true
    })

    //
    server.interceptors.request.use((config)=>{
        if(config.method == 'get'){
            config.params = {...config.data};
        }

        KemengUI.Loading.loadingMount();
        // config.headers["content-type"] = "applicention/json";
        // config.headers["token"] = "";
        return config;
    },(err)=>{
        return Promise.reject(err);
    })
    //响应拦截
    server.interceptors.response.use((res)=>{
        if(res.status == 200){
            KemengUI.Loading.loadingDestroy();
            return res.data;
        }
    },(err)=>{
        return Promise.reject(err)
    })

    export default server;
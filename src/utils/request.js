    //对axios的二次封装
    import axios from "axios"
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
        // config.headers["content-type"] = "applicention/json";
        // config.headers["token"] = "";
        return config;
    },(err)=>{
        return Promise.reject(err);
    })
    //响应拦截
    server.interceptors.use((res)=>{
        if(res.status == 200){
            return res.data;
        }
    },(err)=>{
        return Promise.reject(err)
    })

    export default server;
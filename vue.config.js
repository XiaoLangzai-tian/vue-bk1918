    const path =require('path');

    module.exports={
        // 跨域
        devServer:{
            open:true,

            proxy:{
                '/ajax':{
                    target:"http://m.maoyan.com",
                    changeOrigin:true
                    // http://m.maoyan.com/ajax/cinemaList
                },
                "/kemeng":{
                    target:"http://39.97.33.178",
                    changeOrigin:true,
                    pathRewrite:{
                        //重写路径
                        '^/kemeng':''
                    }
                }
            }
        },
        //别名配置
        configureWebpack:{
            resolve:{
                alias:{
                    "@":path.join(__dirname,"./src"),
                    "@api":path.join(__dirname,"./src/api"),
                    "@common":path.join(__dirname,"./src/common"),
                    "@components":path.join(__dirname,"./src/components"),
                    "@pages":path.join(__dirname,"./src/pages"),
                    "@router":path.join(__dirname,"./src/touter"),
                    "@store":path.join(__dirname,"./src/store"),
                    "@utils":path.join(__dirname,"./src/utils"),
                    "@assets":path.join(__dirname,"./src/assets")
                }
            }
        }
    }
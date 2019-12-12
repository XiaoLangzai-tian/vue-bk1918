<template>
    <div class="page"> 
        <Header title="猫眼电影" icon/>
        <div class="mui-content">
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <input  type="text"
                     class="mui-input-clear mui-input" 
                     placeholder="账户名/手机号Email"
                    >
                </div>
                <div class="mui-input-row">
                    <input type="password" 
                    class="mui-input-clear mui-input" 
                    placeholder="请输入您的密码"
                     >
                </div>
            </form>
            <div class="mui-content-padded">
                <button type="button" class="mui-btn mui-btn-block mui-btn-primary">登录</button>
                <div class="link-area"><a id='reg'>注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
                </div>
            </div>
            <div class="mui-content-padded oauth-area">
            </div>
            <div class="copyright">
                <span class="copyright">© 猫眼电影 客服电话：<a data-evt="ft/hotline" href="tel:4006705335">400-670-5335</a></span>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    name:"login"
}
</script>
<style>
    .back{
        width:30px;
        height:100%;
        text-align: center;
        line-height:44px;
    }
    .mui-content{
        background:#fff;
    }
    .mui-input-clear{
        font-size:.28rs em;
    }
    .mui-btn-blue, .mui-btn-primary, input[type=submit]{
        background:#e54847;
        outline:none;
        border:0;
    }
    .link-area a{
        color:#666;
    }
    .area {
        margin: 20px auto 0px auto;
    }
    
    .mui-input-group {
        margin-top: 10px;
    }
    
    .mui-input-group:first-child {
        margin-top: 45px;
    }
    .mui-input-row label~input,
    .mui-input-row label~select,
    .mui-input-row label~textarea {
        width: 78%;
    }
    
    .mui-checkbox input[type=checkbox],
    .mui-radio input[type=radio] {
        top: 6px;
    }
    
    .mui-content-padded {
        margin-top: 25px;
    }
    
    .mui-btn {
        padding: 10px;
    }
    
    .link-area {
        display: block;
        margin-top: 25px;
        text-align: center;
    }
    
    .spliter {
        color: #bbb;
        padding: 0px 8px;
    }
    
    .oauth-area {
        position: absolute;
        bottom: 20px;
        left: 0px;
        text-align: center;
        width: 100%;
        padding: 0px;
        margin: 0px;
    }
    
    .oauth-area .oauth-btn {
        display: inline-block;
        width: 50px;
        height: 50px;
        background-size: 30px 30px;
        background-position: center center;
        background-repeat: no-repeat;
        margin: 0px 20px;
        /*-webkit-filter: grayscale(100%); */
        border: solid 1px #ddd;
        border-radius: 25px;
    }
    
    .oauth-area .oauth-btn:active {
        border: solid 1px #aaa;
    }
    
    .oauth-area .oauth-btn.disabled {
        background-color: #ddd;
    }
    .copyright {
        text-align: center;
    }
    .copyright a {
        color: #df2d2d;
        text-decoration: none;
        outline: 0;
    }
</style>
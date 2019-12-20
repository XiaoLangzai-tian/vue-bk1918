export const throttling=(function (){
    var firstTime = 0;
    return function(callback,time){
        var lastTime = new Date().getTime();
        if(lastTime - firstTime > time){
            callback();
            firstTime =  lastTime;
        } 
    }
})()
<template>
    <div class="city">
        <section class="city_position">
            <div id="locate" class="city-title">
                定位城市
            </div>
            <div class="city-list city-list-inline clearfix">
                <div class="location-city">定位失败，请点击重试</div>
            </div>
        </section>
        <section>
            <div id="hot" class="city-title">
                热门城市
            </div>
            <div class="city-list city-list-inline clearfix">
                <div class="city-item" data-nm="上海" data-id="10">
                    上海
                </div>
                <div class="city-item" data-nm="北京" data-id="1">
                    北京
                </div>
                <div class="city-item" data-nm="广州" data-id="20">
                    广州
                </div>
                <div class="city-item" data-nm="深圳" data-id="30">
                    深圳
                </div>
                <div class="city-item" data-nm="武汉" data-id="57">
                    武汉
                </div>
                <div class="city-item" data-nm="天津" data-id="40">
                    天津
                </div>
                <div class="city-item" data-nm="西安" data-id="42">
                    西安
                </div>
                <div class="city-item" data-nm="南京" data-id="55">
                    南京
                </div>
                <div class="city-item" data-nm="杭州" data-id="50">
                    杭州
                </div>
                <div class="city-item" data-nm="成都" data-id="59">
                    成都
                </div>
                <div class="city-item" data-nm="重庆" data-id="45">
                    重庆
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name:"City"
}
</script>
<style>
    .city{
        background-color: #ebebeb;
        font-size: 14px;
        color: #333;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 1000;
        overflow-y: auto;
        
    }
    .city_position{
        width:100%;
        height:0.86rem;
    }
    .city-title {
        padding-left: 15px;
        line-height: 30px;
    }
    .city-list-inline {
        background-color: #f5f5f5;
        padding-bottom: 8px;
    }
    .city-list-inline .location-city {
        width: auto;
        min-width: 45%;
        
        padding: 0 20px;
    }
    .city-list {
        padding-right: 30px;
        overflow:hidden;
    }
    .city-list-inline .city-item, .city-list-inline .location-city {
        float: left;
        background: #fff;
        width: 29%;
        height: 33px;
        margin-top: 15px;
        margin-left: 4%;
        padding: 0 4px;
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        line-height: 33px;
        text-align: center;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
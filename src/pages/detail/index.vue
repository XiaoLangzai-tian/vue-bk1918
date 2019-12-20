<template>
    <div>
        <Header :title="nm" icon/>
        <h1>12334</h1>
    </div>
</template>
<script>
import {detailMovieListApi} from '@api/movie.js'
export default {
    name:'detail',
    props:["id",'nm','img'],
    data(){
        return {
            detail :[]
        }
    },
    created(){
        this.getDetailData(this.id);
    },
    methods:{
        async getDetailData(id){
            let data = await detailMovieListApi(id);
            console.log(data)
        }
    }
}
</script>
<style>
    
</style>
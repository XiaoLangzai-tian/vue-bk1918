<template>
    <div>
        <Header :title="nm" icon/>
        <h1>12334</h1>
    </div>
</template>
<script>
import {detailApi} from '@api/movie.js'
export default {
    name:'detail',
    props:["id","nm"],
    data(){
        return {
            detail :[]
        }
    },
    created(){
        this.getDetailData();
    },
    methods:{
        async getDetailData(){
            let data = await detailApi();
            console.log(data)
        }
    }
}
</script>
<style>
    
</style>
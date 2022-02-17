<template>
    <div>
        <a href="javascript:;" @click="fetch">爬取蝴蝶刀</a>
        <a href="javascript:;" @click="fetch1">爬取爪子刀</a>
        <a href="javascript:;" @click="fetch2">爬取短剑</a>
        <a href="javascript:;" @click="fetch3">爬取刺刀</a>
        <a href="javascript:;" @click="fetch4">爬取折叠刀</a>
    </div>
</template>

<script>
    export default {
        name : 'Fetch',
        methods: {
            fetch() {
                 this.$http.get("http://localhost:8081/crawler/fetch").then((res) =>{

    })
            },
            fetch1() {
                 this.$http.get("http://localhost:8081/crawler/fetch1").then((res) =>{
   
    })
            },
            fetch2() {
                 this.$http.get("http://localhost:8081/crawler/fetch2").then((res) =>{
    
    })
            },
            fetch3() {
                 this.$http.get("http://localhost:8081/crawler/fetch3").then((res) =>{

    })
            },
            fetch4() {
                 this.$http.get("http://localhost:8081/crawler/fetch4").then((res) =>{
     
    })
            }

        },
    }
</script>

<style scoped>

</style>
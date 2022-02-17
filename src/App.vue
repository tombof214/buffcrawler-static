<template>
  <div id="app">
    <a href="#/home">主页</a>
    <a href="#/up">涨幅</a>
    <a href="#/fetch">爬虫</a>
    <a href="#/search">搜索</a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

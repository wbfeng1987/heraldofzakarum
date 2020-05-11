<template>
  <div id="app">
    <img src="./assets/herald-of-zakarum.png">
    <h1 id="desc">Gilded Shield</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
};
  /*@import './common/font/font.css';*/
  @font-face {  
 font-family: 'exocetH';  //重命名字体名
 src: url('./common/font/exocetH.ttf');  //引入字体
 font-weight: normal;  
 font-style: normal;  
};
  #desc {
    font-family: exocetH;
    color: #908858
  };
</style>

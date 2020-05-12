<template>
  <div id="app">
    <nav>
      <div class="container">
        <b-button-group>
          <router-link to="/">
            <b-button variant="primary">Home</b-button>
          </router-link>
          <router-link to="/smash">
            <b-button variant="danger">Smash!</b-button>
          </router-link>
          <router-link to="/comment">
            <b-button variant="info">Taunt!</b-button>
          </router-link>
        </b-button-group>
      </div>
    </nav>
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
  .d2style {
    font-family: exocetH;
    color: #908858
  };
  .container {
    padding-bottom: 50px;
  };
</style>

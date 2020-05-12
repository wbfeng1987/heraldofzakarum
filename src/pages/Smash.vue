<template>
  <div>
    <img id="paladin" src="@/assets/Paladin.gif">
    <div class="d2style">
      <h1 id="quote">{{msg}}</h1>
    </div>
    <div class="h2 mb-0">
      <b-icon-arrow-up></b-icon-arrow-up>
      <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'quote',
    data () {
      return {
        msg: '\"I will cleanse this wilderness.\"'
      };
    },
  }
</script>

<style lang="less">
  #quote {
    font-size:200%;
  };
  #paladin {
    padding-top: 50px;
    padding-bottom: 50px;
  };
</style>
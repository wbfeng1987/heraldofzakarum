<template>
  <div>
    <div class="input">
      <b-form-textarea name="taunt" placeholder="leave your taunts here : )" rows="8"></b-form-textarea>
    </div>
    <img id="confused" src="@/assets/ConfuseCurse.gif">
  </div>
</template>

<script>
  export default {
    name: 'taunt',
    data () {
      return {
        msg: 'foo'
      };
    },
  }
</script>

<style lang="less">
  .input {
    width: 1000px;
    left:0;
    right:0;
    margin:auto;
  };
  #confused {
    padding-top: 50px;
  }
</style>
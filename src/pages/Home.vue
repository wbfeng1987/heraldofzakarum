<template>
  <div>
    <img src="@/assets/herald-of-zakarum.png">
    <h1 class="d2style">Gilded Shield</h1>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Weibo\'s Website'
      };
    },
  }
</script>
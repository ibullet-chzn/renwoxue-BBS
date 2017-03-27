<template>
  <div class="name">
    <h1 v-bind:class="{color:show}">这是子组件 1</h1>
    <div @click="change">切换颜色</div>
  </div>
</template>

<script lang="babel">
  export default {
    name: 'name',
    data () {
      return {
        name: '于超',
        show: true
      }
    },
    methods: {
      change: function () {
        this.show = !this.show;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  .color {
    color: red;
  }
</style>

<template>
  <div class="name">
    <h1>{{ name }}</h1>
    <router-link to="/index">首页</router-link>
    <h1>{{ query.a }}</h1>
    <div @click="add">点我可以+1哦</div>
    <div v-for="data in forData">
      这是name：{{data.name}}
      这是age：{{data.age}}
    </div>
    <div v-if="is">我是对的</div>
    <div v-else>我是错的</div>
    <div v-show="number==1">number是1</div>
    <div v-show="number==2">number是2</div>
    <div v-show="number==3">number是3</div>
  </div>
</template>

<script lang="babel">
  export default {
    name: 'name',
    data () {
      return {
        name: '于超',
        query: {},
        number: 1,
        forData: [
          {
            name: 'a',
            age: '1'
          },
          {
            name: 'b',
            age: '2'
          },
          {
            name: 'c',
            age: '3'
          }
        ],
        is: true
      }
    },
    created () {
      this.query = this.$route.query
    },
    methods: {
      add: function () {
        console.log(this.number++)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

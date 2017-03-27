<template>
  <div class="name">
    <h1>这是子组件 2</h1>
    <div>{{aa | transform}}</div>
    <div>{{bb}}</div>
    <div>{{cc | transform}}</div>
    <div>{{dd}}</div>
    <div>{{ee | transform}}</div>
    <div>{{ff}}</div>

    <input type="text" v-focus>
  </div>
</template>

<script lang="babel">
  export default {
    name: 'name',
    data () {
      return {
        name: '于超',
        aa: 1,
        bb: 2,
        cc: 3,
        dd: 4,
        ee: 5,
        ff: 6
      }
    },
    created(){
      console.log(this.$store.state.users.status);
      this.$store.dispatch('actions_users_getInfo');
      this.$store.commit('USERS_CLEARINFO');
      this.$store.getters.getters_users_getInfo();
      this.$say();
      this.$http.post('/static/demo20.json', {
        aa: 1,
        bb: 2
      }).then(function (res) {
        console.log(res);
      }, function (err) {
        console.log(err);
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

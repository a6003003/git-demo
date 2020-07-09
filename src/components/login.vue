<template>
  <div class="form">
  <input type="text" id="account" placeholder="Account" v-model="user.account">
  <br>
  <input type="text" id="password" placeholder="password" v-model="user.password">
  <br>
  <button @click="login">login</button>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      user:{
        account:'',//
        password:'',//
      }
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body{
    background-color: rgba(0, 0, 0,.2);
}

</style>

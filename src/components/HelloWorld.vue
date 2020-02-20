<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <button @click="callWarning">Warning</button>
    <button @click="callError">Error</button>
  </div>
</template>

<script>
  import {eventBus} from "../main";

  export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    callWarning() {
      eventBus.$emit('show-notify', {
        message: 'Warning! Do not let your Rainbow Pony eat too muh Skittles!',
        status: 'warning'
      })
    },
    callError() {
      eventBus.$emit('show-notify', {
        message: 'Error! The fail of fails!',
        status: 'error'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

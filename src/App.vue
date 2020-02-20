<template>
    <div id="app">
        <!--notification-->
        <router-link exact active-class="font-bold" tag="li" to="/">Home</router-link>
        <router-link active-class="font-bold" tag="li" to="/users">Users</router-link>
        <router-link active-class="font-bold" tag="li" to="/employee">Employee</router-link>
        <router-view></router-view> <!--Отображение выбранного компонента-->
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {
            }
        },
        methods: {}
    }
</script>

<style src="./assets/css/tailwin.css">
  
</style>
<template>
    <div id="users-list">
        <h1>User Lists</h1>
        <span>{{ counter }}</span>
        <span>{{ title }}</span>
        <ul>
            <li v-for="user in users" :key="user.id">
                <router-link tag="a" :to="`/users/${user.id}`">{{ user.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "List",
        computed:{
            counter(){
                return this.$store.state.count
            },
            title(){
                return this.$store.state.title
            },
            users(){
                return this.$store.state.users
            }
        }
    }
</script>

<style scoped>
</style>
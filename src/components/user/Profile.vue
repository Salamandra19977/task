<template>
    <div id="user-profile"> <!--Обязательный корневой элемент-->
        <h1>User Profile {{ getName }} </h1>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="back">Back</button>
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name">
        </div>
        <div>
            <button @click="add">Save</button>
        </div>
    </div>
</template>

<script>
    //import {mapGetters} from 'vuex'
    export default {
        name: "Profile",
        // computed:mapGetters([
        //     'title',
        //     'users'
        // ]),
        data() {
            return {
                id: this.$route.params.id, 
                name:''
            }
        },
        methods: {
            back() {
                this.$router.push('/users')
            },
            renameuser() {
                this.$store.commit('add', { id:this.id, name:this.name })
            }
        },
        filters: {
            readMore(text, length, suffix) {
                return text.substring(0, length) + suffix;
            }
        },
        watch: {
            $route(to) {
                this.id = to.params['id']
            }
        },
        computed:{
            getName(){
                return this.$store.getters.getTodoById(this.id).id;
            }
        }
    }
</script>

<style scoped>
</style>
<template>
  <div id="List-empoyes">
        <h1>List employee</h1>
        <li v-for="employee in getUsers" :key="employee.id">
            {{ employee.name }}
        </li>
  </div>
</template>

<script>

  export default {
        name:"dsf",
        data(){
            return {
                employees: []
            }
        },
        methods:{
            getDate(){
                this.$store.dispatch('getEmployees')
            },
            getTest(){
                this.$store.dispatch('getTest')
            }
        },
        computed:{
            getUsers(){
                return this.$store.getters.getUsers;
            }
        },
        created(){
            this.getDate()
            this.getTest()
        }
  }
</script>


<style>
  
</style>
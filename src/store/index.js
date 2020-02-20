import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
actions:{
    getEmployees(ctx){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            ctx.commit('setDate',res.data)
        })
    },
    getTest(){
        axios.post('http://dummy.restapiexample.com/api/v1/create', {"name":"Alexei"})
        .then(res => {
            /* eslint-disable no-console */
                console.log(res.data)
            /* eslint-enable no-console */
        })
    }
},
mutations:{
    setDate(state, obj){
        state.users = obj
    }
},
state:{
    users:[],
	title:'Home page',
	count:10	
},
getters:{
    getUsers(state){
        return state.users
    }
}
})
<template>
  <div id="profileForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name">
    </div>
    <div>
      <label for="surname">Surname</label>
      <input type="text" id="surname" v-model="surname">
    </div>
    <div>
    <label for="about-me">About Me</label>
    <textarea rows="15" type="text" v-model="aboutMe" id="about-me" style="width: 500px"></textarea>
    </div>
    <div>
      <button @click="save">Save</button>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../../main"
export default {
  name: 'ProfileForm',
  methods:{
    save(){
      let name = this.name
      let surname = this.surname
      let aboutMe = this.aboutMe
      this.$emit('save-user', {name , surname, aboutMe});
       eventBus.$emit('show-status', {
        'message' : 'Данные изменены',
        'status': 'success'
       })
    },
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<template>
  <nav>
    <router-link class="Hlink" v-for="item in list" v-bind:key="item.to" :to="item.to">
      {{item.title}}</router-link>
      <button id="btLogout" @click="logout" v-if="isLoggedIn">Logout</button>
      <button id="btLogin" @click="$emit('open-login-modal')" v-else>Login</button>
  </nav>
</template>

<script>
import firebase from '../utilities/firebase'

export default {
  props: {isLoggedIn:Boolean},
  data(){
    return{
      list: [
        {title:"Home", to:"/" },
        {title:"Fruits", to:"./Fruits" },
        {title:"Calendar", to:"./Calendar" },
        {title:"Markdown", to:"./Markdown" },
        {title:"Slider Carousel", to:"./Slider"},
        {title:"DemoThree", to:"./DemoThree"}
      ]
    }
  },
  methods: {
    logout(){
      firebase.auth()
      .signOut()
      // .then((res) => {})
      // .catch((e) => {});
    }
  }
}
</script>

<style>
#btLogin, #btLogout{
  border-radius: none;
  margin-left: 2%;
  background-color: darkcyan;
  color: white;
  border: darkcyan;
  font-size: 18px;
}
.Hlink{
  margin-left: 1%;
  margin-right: 1%;
  color: white;
  text-decoration: none;
}

nav{
  width: 100%;
  height: 30px;
  background: darkcyan;
  margin-top: -4%;
  text-align: left;
  color: white;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
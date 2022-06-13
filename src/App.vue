<template>
  <div>
    <AppHeader
      :isLoggedIn="isLoggedIn"
      @open-login-modal="isLoginOpen = true"
    />
    <div>
      <router-view></router-view>
    </div>
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
  </div>
</template>
<script>
import AppHeader from "./pages/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";
import firebase from "./utilities/firebase";

export default {
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  },
  components: {
    AppHeader,
    LoginModal,
  },
};
</script>
<style>
#helloworld {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

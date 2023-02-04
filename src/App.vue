<template>
  <LoginModule/>
</template>

<script>
import LoginModule from './components/Login.vue'
import SubjectModule from './modules/SubjectModule.js'
import AuthModule from './modules/AuthModule.js'

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
            apiKey: "AIzaSyDkxHZDqB-BLHgSQjyhLu-5bUv5MojTaac",
            authDomain: "sitde-pk-auth.firebaseapp.com",
            projectId: "sitde-pk-auth",
            storageBucket: "sitde-pk-auth.appspot.com",
            messagingSenderId: "535178395554",
            appId: "1:535178395554:web:c3d5b539e74ded998ebcfb",
            measurementId: "G-3X9J0KVVT6"});
export const Instance = getAuth(app)

new SubjectModule().loadSubjects()
new AuthModule()

export default {
  name: 'App',
  components: {
    LoginModule
  }
}
</script>

<style>
::-webkit-scrollbar {
    display: none;
}

body {
    margin: 0;
    text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1224px;
  height: 776px;
  margin: 0px;
  
  padding: 0px;
  background-image: url("./assets/login-layout.png");
}
</style>

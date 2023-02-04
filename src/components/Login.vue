<template>
    <div class="layout" src="../assets/login-layout.png"/>

    <input class="usernameInput" type="text" @change="username = $event.target.value"/>
    <input class="passwordInput" type="password" @change="password = $event.target.value"/>

    <button class="login" v-on:click="login()"/>

</template>

<script>
import {getAuth} from "firebase/auth"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

export default {
    name: "LoginModule",
    data() {
        return {
            username: "",
            password: ""
        }
    },

    methods: {
        async login() {
            if(this.username.indexOf(' ') >= 0){
                alert("Tên đăng nhập không được chứa dấu cách!")
                return;
            }
            if(!regexExp.test(this.username))
            {
                alert("Vui lòng nhập một email hợp lệ !");
                return;   
            }
            if(this.password.length == 0){
                alert("Vui lòng nhập mật khẩu hợp lệ !");
                return;
            }

            await createUserWithEmailAndPassword(getAuth(), this.username, this.password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Đăng kí thành công " + user.uid)
            }).catch(() => {
                signInWithEmailAndPassword(getAuth(), this.username, this.password)
                .then((_userCredential) => {
                    const user = _userCredential.user;
                    alert("Đăng nhập thành công " + user.uid)
                }).catch((secondException) => {
                    console.log(secondException)
                })
            });
        }
    }
}
</script>

<style>
.layout {
    width: 1224px;
    height: 776px;
    padding: 0%;
}

.usernameInput {
    width: 388px;
    height: 69px;
    position: absolute;
    top: 285px;
    left: 739px;
    border-radius: 15px;
    font-size: 18pt;
    text-indent: 10px;
}

.passwordInput {
    width: 388px;
    height: 69px;
    position: absolute;
    top: 405px;
    left: 739px;
    border-radius: 15px;
    font-size: 18pt;
    text-indent: 10px;
}

.login {
    width: 219px;
    height: 69px;
    top: 555px;
    left: 824px;
    position: absolute;
    cursor: pointer;
    background-color: transparent;
    border: 0;
}


</style>
<template>
  <div class="container">
    <button @click="login">ログイン</button>
  </div>
</template>

<script>
import { firebase } from '~/plugins/firebase.js';

export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(result => {
          const user = result.user;
          console.log(user);
        }).catch(error => {
          window.alert(error);
        });
    }
  }
}
</script>

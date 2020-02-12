<template>
  <div class="input-container">
    <textarea v-model='text' @keydown.enter='addMessage' @click='openLoginModal'></textarea>
    <el-dialog title="" :visible.sync="dialogVisible" width="30%">
      <div class="image-container">
       <img src="~/assets/signin.png" @click='login'/>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { db, firebase } from '~/plugins/firebase.js';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
export default {
  data() {
    return {
      dialogVisible: false,
      text: null
    };
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(result => {
        const user = result.user;
        console.log(user);
        this.dialogVisible = false;
      }).catch(error => {
        window.alert(error);
      });
    },
    openLoginModal () {
      this.dialogVisible = true;
    },
    addMessage(event) {
      if (this.keyDownedForJPConversion(event)) {return;}
      const channelId = this.$route.params.id;
      db.collection('channels').doc(channelId).collection('messages').add({text: this.text, createdAt: new Date().getTime()}).then(() => {
        this.text = null;
      });
    },
    keyDownedForJPConversion(event) {
      const codeForConversion = 229;
      return event.keyCode === codeForConversion;
    }
  }
}
</script>

<style scoped>
.input-container {
 padding: 10px;
 height: 100%;
}

textarea {
 width: 100%;
 height: 100%;
}

.image-container {
 display: flex;
 justify-content: center;
}

img {
 width: 70%;
 cursor: pointer;
}
</style>

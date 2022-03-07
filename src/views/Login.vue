<template>
  <div class="app__container">
    <h1>ログイン画面</h1>
    <p>{{ errorMessage }}</p>
    <form class="form__container" action="/home" method="post">
      <label class="user__label">ユーザ名</label>
      <input class="user__enter" required v-model="username" type="text" placeholder="ユーザ名を入力してください。" />
      <div class="password__container">
        <label class="password__label">パスワード</label>
        <input class="password__enter" required v-model="password" type="password" placeholder="パスワードを入力してください。" />
      </div>
      <!-- <button class="form__submit" type="button" @click="testtest">送信</button> -->
      <input class="form__submit" type="button" @click="testtest" value="送信" />
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "login",
    data() {
      return {
        username: "",
        password: "",
        errorMessage: "",
        loginResult: false
      }
    },
    methods: {
      testtest() {
        console.log("test");
        console.log(this.username);
        console.log(this.password);
        axios.post('http://localhost:3000/api/hello', {
          username: this.username,
          password: this.password
        })
          .then((res) => {
            this.loginResult = res.data
            if (!this.loginResult) {
              this.errorMessage = "ユーザ名かパスワードが誤っています。"
              return
            }

            this.errorMessage = ""
            this.$router.push({ path: "/home" })
          })
          .catch(err => {
            console.log(err);
          })
      }
    }
}
</script>

<style scoped>

.password__img__container, .form__container {
  width: 50%;
}

.password__container {
  margin: 24px 0 0;
}

.password__container label, input {
  display: block;
}

.password__label {
  opacity: .6;
}

.password__enter {
  width: 240px;
  margin: 2px 0 0;
}

.form__submit {
  position: relative;
  width: 200px;
  height: 40px;
  margin: 32px 0 0;
  color: #fff;
  text-align: center;
  background-color: #0095F6;
  border-radius: 4px;
}

.form__submit p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 14px;
}

@media screen and (max-width: 750px) {
  .app__container {
    display: block;
  }
  .password__img, .password__enter, .form__submit{
    width: 100%
  }
  .password__img__container, .form__container {
    width: 100%;
  }
  .password__label {
    font-size: 13px;
  }
}
</style>

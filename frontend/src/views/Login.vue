<template>
  <div class="app__container">
    <h1>Hello World</h1>
    <div class="password__img__container">
      <img class="password__img" src="../assets/img/password-icon.png" alt="パスワード アイコン">
    </div>
    <!-- <form class="form__container" action="/" method="post">
        <div class="password__container">
          <label class="password__label">パスワード</label>
          <input class="password__enter" required type="password" placeholder="パスワードを入力してください。" />
        </div>
        <button class="form__submit" type="submit"><p>ログイン</p></button>
    </form> -->
  </div>
</template>

<script>
export default {
    name: "login"
}
</script>

<style scoped>
.app__container {
  display: flex;
  align-items: center;
}

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
  width: 240px;
  height: 40px;
  margin: 32px 0 0;
  color: #fff;
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

<template>
  <div class="app__container">
    <form action="signup" method="post">
        <label>Password</label>
        <input required type="password" placeholder="パスワード"/>
        <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
    name: "login"
}
</script>
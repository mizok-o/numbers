<template>
    <form action="signup" method="post">
        <label>Password</label>
        <input required type="password" placeholder="パスワード" v-model="user.password" />
        <button type="submit">Sign In</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style scoped>

</style>

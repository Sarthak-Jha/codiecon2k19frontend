<template>
    <div class="main">
        <user-details></user-details>
    </div>
</template>

<script>
import UserDetails from '../components/UserDetails'

export default {
    name: 'UserDetail',
    components: {
        UserDetails
    }
}
</script>

<style lang="scss" scoped>
.main {
    margin-top: 70px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    flex-direction: row;
}
</style>
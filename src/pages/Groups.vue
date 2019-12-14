<template>
    <div class="group">
        <GroupDetails></GroupDetails>
    </div>
</template>

<script>
    import GroupDetails from "../components/GroupDetails";

    export default {
        name: 'Groups',
        components: {
            GroupDetails
        }
    }
</script>

<style lang="scss" scoped>
    .group{
        margin-top: 70px;
    }
</style>

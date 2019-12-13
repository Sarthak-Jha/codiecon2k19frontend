<template>
    <div class="button">
        <v-btn></v-btn>
    </div>
</template>

<script>
export default {
    name: 'button',
    props: {
        name: {
            type: String,
            required: true
        }
    }

}
</script>

<style>
.button {
    min-width: 50px;
    min-height: 100px;
}
</style>
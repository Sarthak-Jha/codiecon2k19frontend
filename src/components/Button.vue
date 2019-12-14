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
    },
    data () {
        return {

        }
    },
    methods: {
        clickitem (id) {
            this.$emit('clicked',id)
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
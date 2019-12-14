<template>
    <div>
        <div class="text-center">
            <v-pagination
            v-model="page"
            :length="totalPage"
            circle
            ></v-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'paginaton',
    props: {
        currentPage: {
            type: Number,
            required: true,
            default: 1
        },
        totalPage: {
            type: Number,
            required: true,
            default: 1
        }
    },
    data () {
        return {
            page: 1,
        }
    },
    watch: {
        currentPage: {
            immediate: true,
            handler (newValue) {
                this.$emit('currentpage', newValue)
                this.page = newValue
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
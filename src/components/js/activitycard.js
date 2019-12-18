export default {
    name: 'activityCard',
    props: {
        category: {
            type: Object,
            required: true,
            default: () => []
        }
    },
    methods: {
        selectedCategory (id) {
            this.$emit('clicked', id)
        }
    }
}
import categoryPage from './categorypage'
import {mapGetters} from 'vuex'

export default {
    name: "CreatePost",
    components: {
        categoryPage
    },
    computed: {
        ...mapGetters('postStore', ['getAllCategories'])
    }
}
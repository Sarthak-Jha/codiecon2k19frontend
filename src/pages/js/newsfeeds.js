import postCard from '@/components/PostCard.vue'
import searchFilters from '@/components/SearchFilters.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'newsfeeds',
    components: {
        postCard,
        searchFilters
    },
    mounted () {
        if (!this.$route.query.category) {
            let data = {
                'category' : 'all'
            }
            this.makeSearch({
                data,
                success: this.success,
                fail: this.fail,
                apiParam: this.currentPage
            })
        }
    },
    computed: {
        ...mapGetters('searchStore',['getSearchResult']),
        totalPage () {
            if (this.getSearchResult) {
                if (this.getSearchResult.totalElements%6 == 0) {
                    return this.getSearchResult.totalElements/6
                }
                return this.getSearchResult.totalElements/6 + 1
            }
            return 1
        },
        resultFound () {
            if (this.getSearchResult.totalElements === 0) {
                return false
            }
            return true
        }
    },
    methods: {
        ...mapActions('searchStore',['makeSearch'])

    },
    data () {
        return {
            currentPage: 1
        }
    }

}

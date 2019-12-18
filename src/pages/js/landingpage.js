
import timelineitem from '@/components/TimelineItem.vue'
import activitycard from '@/components/ActivityCard.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "LandingPage",
    components: {
        timelineitem,
        activitycard
    },
    data () {
        return {
            currentPage: 1,
            categories: [],
            timelinedata: [{
                'index': 0,
                'heading': 'Buy',
                'desc' : 'You can buy things within the organisation from the people around you',
            },{
                'index': 1,
                'heading': 'Sell',
                'desc' : 'You can sell things within the organisation from the people around you',
            },{
                'index': 2,
                'heading': 'Rent',
                'desc' : 'You can rent things within the organisation from the people around you',
            },{
                'index': 3,
                'heading': 'Borrow',
                'desc' : 'You can borrow things within the organisation from the people around you',
            },{
                'index': 4,
                'heading': 'Activity',
                'desc' : 'You can create activities like sports etc within the organisation from the people around you',
            },{
                'index': 5,
                'heading': 'Flat Sharing',
                'desc' : 'You can find flatmates within the organisation from the people around you',
            },{
                'index': 6,
                'heading': 'And More to Come...',
                'desc' : 'We promise to keep on addding more services on discussion board...',
            }],
            searchTerm: ''
        }
    },
    watch: {
        getAllCategories() {
            this.categories = this.getAllCategories
        }
    },
    computed: {
        ...mapGetters('postStore',[
            'getAllCategories'
        ]),
    },
    methods: {
        ...mapActions('postStore',[
            'allCategories',
            'allLocations',
            'allTags',
            'fetchAllTypes'
        ]),
        ...mapActions('searchStore',['makeSearch']),
        selectedCategory( value ) {
            let data = {
                'category' : value
            }
            this.makeSearch({
                data,
                success: this.success,
                fail: this.fail,
                apiParam: this.currentPage
            })
        },
        success () {
            this.$router.push({ path: 'newsfeeds', query: { category : 'category' }})
        },
        fail () {

        },
        searchNews () {
            let data = {
                'category': "ALL",
                'text': this.searchTerm
            }
            this.makeSearch({
                data,
                success: this.success,
                fail: this.fail,
                apiParam: this.currentPage
            })
            this.$router.push({ path: 'newsfeeds', query: { category : 'search' }})
        }
    },
    mounted () {
        this.allCategories({}),
        this.allLocations({}),
        this.allTags({}),
        this.fetchAllTypes({}),
        this.categories = this.getAllCategories
    },
}


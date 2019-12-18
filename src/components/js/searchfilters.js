// import DatePicker from '../js/datepicker'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'searchFilters',
    components: {
        // DatePicker
    },
    computed: {
        ...mapGetters('postStore',{
            getAllTags :'getAllTags',
            getAllCategories: 'getAllCategories',
            getAllLocations: 'getAllLocations',
            getAllGroupsByUser: 'getAllGroupsByUser', 
            getAllType: 'getAllType'
        }),
        computedEndTime () {
            return null
        },
        computedStartTime () {
            return null
        },
        // category () {
        //     if(this.categories === 'Accomodation') {
        //         return 1
        //     } else if (this.categories === 'Electronics') {
        //         return 2
        //     } else if (this.categories === 'Household') {
        //         return 3
        //     } else if (this.categories === 'Vehicles') {
        //         return 4
        //     } else if (this.categories === 'Activities') {
        //         return 5
        //     } else if (this.categories === 'Discussion') {
        //         return 6
        //     } else if (this.categories === 'Miscellaneous'){
        //         return 7
        //     }
            
        // },
        // location () {
        //     if(this.categories === 'Banglore') {
        //         return 1
        //     } else if (this.categories === 'Mumbai') {
        //         return 2
        //     }
        // }

    },
    created () {
        // this.allCategories({}),
        // this.allLocations({}),
        // this.allTags({}),
        // this.fetchAllTypes({})
    },
    mounted () {
        this.getAllCategories.unshift({
            "categoryId": "ALL",
            "categoryImage": "string",
            "categoryName": "ALL",
            "isFeatured": true
        })
        this.getAllType.unshift("ALL")
        this.getAllLocations.unshift({
            "id": "ALL",
            "name": "ALL"
        })
    },
    watch: {
        startDate () {
            this.endDate = this.startDate.toISOString().substr(0, 10)
        },
        filters () {
            this.callSearchApi
        },
        category () {
            this.callSearchApi
        },
        location () {
            this.callSearchApi
        },
        postType () {
            this.callSearchApi
        },
        postTags () {
            this.callSearchApi
        }
    },
    data () {
        return {
            currentPage: 1,
            startDate: new Date().toISOString().substr(0, 10),
            endDate: new Date().toISOString().substr(0, 10),
            startMenu: false,
            endMenu: false,
            postType: 'ALL',
            postTags: [],
            category: 'ALL',
            location: 'ALL',
            filters: 'LATEST',
        }
    },
    methods: {
        ...mapActions('searchStore',['makeSearch']),
        ...mapActions('postStore',[
            'allCategories',
            'allLocations',
            'allTags',
            'fetchAllTypes'
        ]),
        callSearchApi () {
            let data = {
                'sortType': this.filters,
                'category': this.category,
                'location': this.location,
                'postType': this.postType,
                'tag': this.postTags,
                'startTime': this.computedStartTime,
                'endTime': this.computedEndTime
            }
            this.makeSearch({
                data,
                success: this.success,
                fail: this.fail,
                apiParam: this.currentPage
            })
        }
    }

}

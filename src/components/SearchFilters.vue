<template>
    <div>
        <v-col cols="12" sm="12" offset-sm="0">
            <v-card>
                <v-toolbar color="#1976d2" dark>
                    <v-toolbar-title>Filters</v-toolbar-title>
                </v-toolbar>
                <v-list>

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Sort By </v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-radio-group v-model="filters">
                            <v-radio  label="LATEST" value="LATEST"></v-radio>
                            <v-radio  label="POPULAR" value="POPULAR"></v-radio>
                            <v-radio  label="ACTIVE" value="ACTIVE"></v-radio>
                            <v-radio  label="PRICE" value="PRICE"></v-radio>
                        </v-radio-group>
                    </v-list-item>
                    <v-divider></v-divider>

                    <!-- <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Groups</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-select
                            v-model="groups"
                            :items="getAllGroupsByUser"
                            attach
                            chips
                            item-text="tagName"
                            label="Groups"
                            multiple
                        ></v-select>
                    </v-list-item> -->

                    <!-- <v-divider></v-divider> -->

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Categories</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-select
                            v-model="category"
                            :items="getAllCategories"
                            attach
                            chips
                            item-text="categoryName"
                            item-value="categoryId"
                            label="Categories"
                        ></v-select>

                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Post Type</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-select
                            v-model="postType"
                            :items="getAllType"
                            attach
                            chips
                            item-text="tagName"
                            label="Post Type"
                        ></v-select> 

                    </v-list-item>

                    <v-divider></v-divider>



                    <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title>Filter By Tags</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-select
                            v-model="postTags"
                            :items="getAllTags"
                            attach
                            chips
                            item-text="tagName"
                            label="Tags"
                            multiple
                        ></v-select>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Location</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-select
                            v-model="location"
                            :items="getAllLocations"
                            attach
                            chips
                            item-text="name"
                            item-value="id"
                            label="Locations"
                        ></v-select>

                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Filter By Dates</v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="">
                        <v-menu
                            v-model="startMenu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="startDate"
                                label='From'
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="startDate" @input="startMenu = false"></v-date-picker>
                        </v-menu>
                    </v-list-item>

                    <v-list-item @click="">
                        <v-menu
                            v-model="endMenu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="endDate"
                                label='To'
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="endDate" @input="endMenu = false"></v-date-picker>
                        </v-menu>
                    </v-list-item>

                    <v-divider></v-divider>
                </v-list>
            </v-card>
        </v-col>
    </div>
</template>

<script>
import DatePicker from './DatePicker'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'searchFilters',
    components: {
        DatePicker
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
        },
        category () {
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
        },
        location () {
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
        },
        postType () {
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
        },
        postTags () {
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
        ])
    }

}
</script>

<style lang="scss" scoped>

</style>
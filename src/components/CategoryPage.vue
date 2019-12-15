<template>
    <v-card
            class="mx-auto"
            min-width="200"

            @click="selectedCategory(category.categoryName)"
    >
        <router-link class="link" to="/postform">
            <v-img
                    class="black--text align-end categoryImage"
                    height="150px"
                    width= "300px"
                    :src="category.categoryImage"
            >
            </v-img>
            <v-card-title class="cardTitle">{{category.categoryName}}</v-card-title>
        </router-link>
    </v-card>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "CategoryPage",
        data() {
          return  {
              postTypeList1: ['BUY', 'SELL', 'RENT'],
              postTypeList2: ['ACTIVITY', 'SEEKER', 'CONTRIBUTOR', 'OTHER'],
              postTypeList3: ['DISCUSSION', 'OTHER'],
              postTypeList4: ['OTHER'],
              postTypeList: []
          }
        },
        props: {
            category: {
                type: String,
                required: true,
                default: () => []
            }
        },
        methods: {
            ...mapActions('postStore',['selectCategory','setAllPostType']),
            selectedCategory (id) {
                this.selectCategory(id)
                if(id === 'Accomodation' || id === 'Electronics' || id === 'HouseHold' || id === 'Vehicles') {
                    this.postTypeList = this.postTypeList1
                } else if(id === 'Activities') {
                    this.postTypeList = this.postTypeList2
                } else if(id === 'Discussion') {
                    this.postTypeList = this.postTypeList3
                } else {
                    this.postTypeList = this.postTypeList4
                }
                this.setAllPostType(this.postTypeList)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .link {
        text-decoration: none;
        color: white;
    }
    .cardTitle{
        color: black;
    }
    .categoryImage{
        background-size: contain !important;
    }
</style>

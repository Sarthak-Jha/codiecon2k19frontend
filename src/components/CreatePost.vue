<template>
    <section class="paragraph">
        Select Category
        <section class="cards" >
            <div class="text-center"  v-for="tag in getAllCategories" :key="tag">
                <category-page :category="tag">
                </category-page>
            </div>
        </section>
    </section>
</template>

<script>
    import categoryPage from './CategoryPage'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "CreatePost",
        data () {
            return {
                tags: [
                    'Accomodation Form', 'Electronics Form', 'Household Form', 'Vehicles Form', 'Activities Form', 'Discussion Form', 'Miscllaneous Form'
                ]
            }
        },
        components: {
            categoryPage
        },
        computed: {
            ...mapGetters('postStore', ['getAllCategories'])
        }
    }
</script>

<style scoped>
    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 10px 80px;
    }
    .paragraph {
        margin-top: 75px;
        color: #777;
        background-color: #ffffff;
        text-align:center;
        min-height: 300px;
        padding:50px 80px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }
    .text-center {
        margin: 10px 10px;
    }
</style>

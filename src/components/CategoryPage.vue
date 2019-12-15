<template>
    <v-card
            class="mx-auto"
            min-width="200"

            @click="selectedCategory(category)"
    >
        <router-link class="link" to="/postform">
            <v-img
                    class="white--text align-end"
                    height="150px"
                    width= "300px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
                <v-card-title>{{category}}</v-card-title>
            </v-img>
        </router-link>
    </v-card>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "CategoryPage",
        props: {
            category: {
                type: String,
                required: true,
                default: () => []
            }
        },
        methods: {
            ...mapActions('postStore',['selectCategory']),
            selectedCategory (id) {
                this.selectCategory(id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .link {
        text-decoration: none;
        color: white;
    }
</style>

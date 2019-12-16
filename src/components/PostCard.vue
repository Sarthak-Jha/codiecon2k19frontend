<template>
    <v-card
        max-width="344"
        class="mx-auto"
    >
        <v-list-item>
            <v-list-item-avatar color="grey">
                <v-img :src="postData.posterProfilePictureLink"></v-img>
            </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">
                        <router-link class="link" to="/postdetails">{{postData.title}}</router-link>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        <router-link class="link" to="/userdetail">by {{getName}}</router-link>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-img v-if="image"
            :src="postData.photoLinks[0]"
            height="194"
            ></v-img>
            
            <v-img v-else
            src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
            height="194"
            ></v-img>

            <v-card-title>
                {{postData.type}}
            </v-card-title>
            <v-card-title>
                <v-btn disabled v-for="tag in postData.tags" :key="tag">
                    {{tag}}
                </v-btn>
            </v-card-title>
            <v-card-title>
                {{postData.commentsCounts}} Comments
            </v-card-title>
        <v-card-actions>
        <v-btn text color="deep-purple accent-4">
            <router-link class="link" to="/postdetails">Read</router-link>
        </v-btn>
        <v-spacer></v-spacer>

        <v-card-title>
            {{postData.likeCounts}} 
        </v-card-title>

        <v-btn icon @click="handleLike">
            <v-icon v-bind:class="{ active: postData.alreadyLiked }">mdi-heart</v-icon>
        </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'postCard',
    props: {
        postData: {
            type: Object,
            required: true,
            default: () => {}
        }
    },
    computed: {
        getName () {
            return this.postData.posterFirstName + '' + this.postData.posterLastName
        },
        image () {
            if (this.postData.photoLinks) {
                return true
            }
            return false
        }
    },
    methods: {
        handleLike () {
            this.postData.alreadyLiked = !this.postData.alreadyLiked
        }
    }
}
</script>

<style lang="scss" scoped>
    .link {
        text-decoration: none;
    }
    .active {
        background-color: red;
    }
</style>
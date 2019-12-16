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
            <v-btn class="readPost" @click="readFullPost()">Read</v-btn>
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
import {mapActions, mapGetters} from 'vuex'

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
        ...mapActions('postStore', ['addLikeToPost','fetchPostDetails','fetchCommentList']),
        handleLike () {
            this.postData.alreadyLiked = !this.postData.alreadyLiked
            let data = {
                postId: this.postData.postId,
                forLike: this.postData.alreadyLiked
            }
            let head = {
                token: this.$session.get('token')
            }
            this.addLikeToPost({data, head})
            if(this.postData.alreadyLiked) {
                this.postData.likeCounts = this.postData.likeCounts + 1
            } else {
                this.postData.likeCounts = this.postData.likeCounts - 1
            }

        },
        readFullPost () {
            let data = {
                postId: this.postData.postId
            }
            let head = {
                token: this.$session.get('token')
            }
            this.fetchPostDetails({data, head})
            data = {
                postId: this.postData.postId
            }
            this.fetchCommentList({data})
            this.$router.push('/postdetails')
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
    .readPost {
        color: #1976d2;
        margin-left: 10px;
    }
</style>

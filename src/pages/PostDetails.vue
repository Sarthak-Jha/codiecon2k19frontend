<template>
    <v-card
            :loading="loading"
            class="postDetail"
    >
        <div class="postDetail__container">
            <v-img
                    v-if="getPostDetails.photoLinks !== null"
                    class="postDetail__container__left"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-img v-else
                   src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            >
            </v-img>
            <v-card-text class="postDetails__container__right">
                <v-card-title>{{ getPostDetails.title }}</v-card-title>
                <v-col>
                    <v-divider class="mx-1"></v-divider>
                    <div class="my-4 subtitle-1 black--text">
                        Description
                    </div>
                    <div class="desc">{{ getPostDetails.description }}</div>
                    <v-divider class="mx-1"></v-divider>
                    <v-card-title>
                        {{getPostDetails.type}}
                    </v-card-title>
                    <v-card-title>
                        <v-btn disabled v-for="tag in getPostDetails.tags" :key="tag">
                            {{tag}}
                        </v-btn>
                    </v-card-title>
                    <v-divider class="mx-1"></v-divider>
                    <v-card-text class="likes">
                        <v-badge right>
                            <template v-slot:badge>
                                <span>{{ likeCounts }}</span>
                            </template>
                            <span>Likes</span>
                        </v-badge>
                        <v-badge left>
                            <template v-slot:badge>
                                <span>{{ commentCounts }}</span>
                            </template>
                            <span>Comments</span>
                        </v-badge>
                    </v-card-text>
                </v-col>
            </v-card-text>
        </div>
        <v-divider class="mx-1"></v-divider>
        <v-card-text v-if="commentCounts !== 0">
            <v-card-title>Comment section</v-card-title>
            <div class="commentSec" v-for="comment in getCommentList">
                <v-avatar
                        class="commentSec__left"
                        size="40px"
                >
                    <img
                            v-if="comment.commenterImage === undefined"
                            alt="Avatar"
                            :src="comment.commenterImage"
                    >
                    <img
                            v-else
                            src="../assets/categoryicon/avatar.svg"
                    >
                </v-avatar>
                <v-col
                        class="hidden-xs-only commentSec__right"
                        sm="5"
                        md="3"
                >
                    {{comment.description}}
                </v-col>
                <v-divider class="ma-1"></v-divider>
            </div>
        </v-card-text>
        <v-card-text v-else class="noComments">No Comments Yet</v-card-text>
        <div class="postDetail__addButton">
<!--            <v-btn @click="toggleComment">Add Comment</v-btn>-->
            <div>
                <v-textarea
                        label="Add text"
                        :value="commentText"
                        v-model="commentText"
                ></v-textarea>
                <v-btn @click="postComment">Post</v-btn>
            </div>
        </div>
    </v-card>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'postDetails',
    data () {
        return {
            toggleAddComment: false,
            commentText: ''
        }
    },
    computed: {
        ...mapGetters('postStore', ['getPostDetails','getCommentList']),
        ...mapGetters('userStore', ['userSelfDetails']),
        likeCounts () {
            if(this.getPostDetails.likeCounts === undefined || this.getPostDetails.likeCounts === null) {
                return 0
            } else {
                return this.getPostDetails.likeCounts
            }
        },
        commentCounts () {
            if(this.getPostDetails.commentsCounts  === undefined || this.getPostDetails.commentsCounts === null) {
                return 0
            } else {
                return this.getPostDetails.commentsCounts
            }
        },
        toggleComment() {
            console.log("adafa")
            this.toggleAddComment = !this.toggleAddComment
        }
    },
    methods: {
        ...mapActions('postStore', ['uploadUserComment']),
        postComment () {
            let data = {
                commenterFirstName: this.userSelfDetails.firstName,
                commenterLastName: this.userSelfDetails.lastName,
                commenterImage: null,
                description: this.commentText,
                photoLink: null,
                postId: this.getPostDetails.postId
            }
            let head = {
                Authorization: 'Bearer ' + this.$session.get('token')
            }
            this.uploadUserComment({data, head})
        }
    }
}
</script>

<style lang="scss" scoped>
.postDetail {
    margin-top: 80px;
    width: 90%;
    margin-left: 60px;
    &__container{
        display: flex;
        flex-flow: row;
        &__left{
            width: 50%;
        }
        &__right{
            width: 50%;
        }
    }
    &__addButton{
        margin: 10px;
        padding: 10px;
    }
}
.title{
    height: 50px;
}
.comments{
    float: right;
}
.desc{
    height: 200px;
}
.likes{
    display: flex;
    flex-flow: row;
    justify-content: space-between;
}
.commentSec{
    display: flex;
    flex-flow: row;
    padding: 10px;
    &__left{
        width: 20%;
    }
    &__right{
        width: 80%;
    }
}
.noComments{
    font-size: 15px;
    font-weight: bold;
}
</style>

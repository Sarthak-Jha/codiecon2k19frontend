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
                    <v-list-item-subtitle @click="routeToProfile">
                        <a href="javascript:void(0)" class="link">by {{getName}}</a>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <!-- <v-img v-if="image"
            :src="postData.photoLinks[0]"
            height="194"
            ></v-img> -->

            <v-img
            src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
            height="194"
            ></v-img>

            <v-card-title>
                {{postData.type}}
            </v-card-title>
            <v-card-title>
                <v-btn disabled v-for="tag in postData.tags" :key="tag">
                    {{ tag }} 
                </v-btn>
            </v-card-title>
            <v-card-title v-if="showPrice">
                Rs. {{postData.price}}
            </v-card-title>
            <v-card-title v-else>
                <v-card-title>
                </v-card-title>
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

<script src='./js/postcard.js'></script>

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

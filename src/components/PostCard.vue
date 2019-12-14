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
                    <v-list-item-title class="headline">{{postData.title}}</v-list-item-title>
                    <v-list-item-subtitle>by {{postData.postedBy}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-img
            src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
            height="194"
            ></v-img>

            <v-card-text>
                {{postData.likecounts}}
            </v-card-text>

        <v-card-actions>
        <v-btn
            text
            color="deep-purple accent-4"
        >
            Read
        </v-btn>
        <v-btn
            text
            color="deep-purple accent-4"
        >
            Bookmark
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
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
    }
}
</script>

<style lang="scss" scoped>

</style>
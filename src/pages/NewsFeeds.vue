<template>
    <div class="main">
        <section class="section-left">
            <search-filters></search-filters>
        </section>
        <section class="section-right">
            <div v-for="post in posts" :key="post.postId">
                <post-card></post-card>
            </div>
        </section>
    </div>
</template>

<script>
import postCard from '../components/PostCard'
import searchFilters from '../components/SearchFilters'

export default {
    name: 'newsfeeds',
    components: {
        postCard,
        searchFilters
    },
    data () {
        return {
            posts : {
                "postId": "0c52b8ed-c133-4361-93eb-4ff9146771f0",
                "location": "string",
                "title": "string",
                "description": "string",
                "postedBy": "2",
                "category": "string",
                "type": "SEEKER",
                "createdTime": 1576255168280,
                "lastUpdatedTime": 1576255168280,
                "photoLinks": [
                "string"
                ],
                "likeCounts": 0,
                "commentsCounts": 0,
                "posterFirstName": "string",
                "posterLastName": "string",
                "posterProfilePictureLink": null,
                "status": "PENDING_APPROVAL",
                "alreadyLiked": false,
                "promoted": true
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
}
.section {
    align-self: center;
    &-left {
        flex-grow: 1;

    }
    &-right {
        flex-grow: 3;
    }
}
</style>
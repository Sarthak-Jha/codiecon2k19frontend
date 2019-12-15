<template>
    <v-container fluid>
        <section class="section-right">
            <div class="section-right__sub">
                <section class="cards">
                    <div class="cards__single" v-for="post in 10" :key="post">
                        <post-card :postData="post"></post-card>
                    </div>
                </section>
                <section class="pagination" style="margin-top: 15px; margin-bottom: 10px;">
                    <div class="text-center">
                        <v-pagination
                        v-model="page"
                        :length="totalPage"
                        circle
                        ></v-pagination>
                    </div>
                </section>
            </div>
        </section>
    </v-container>
</template>

<script>
    import PostCard from "./PostCard";
// To do CSS fix
    export default {
        name: "ActivitiesComponent",
        data: () => ({
            page: 1,
            totalPage: 10,
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
        }),
        components: {
            PostCard
        }
    }
</script>

<style lang="scss" scoped>
    .groupPannel {
        margin: 15px;
    }
    .section {
        &-right {
            &__sub {
                display: flex;
                flex-direction: column;
            }
        }
    }
    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly; 
        &__single {
            margin: 10px 10px;
    }
    .pagination {
        margin-top: 15px;
        margin-bottom: 10px;
    }
}
</style>

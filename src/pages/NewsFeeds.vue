<template>
    <div class="main">
        <section class="section-left">
            <search-filters></search-filters>
        </section>
        <section class="section-right">
            <div class="section-right__sub">
                <section class="pagination">
                    <div class="text-center">
                        <v-pagination
                        v-model="currentPage"
                        :length="totalPage"
                        circle
                        ></v-pagination>
                    </div>
                </section>
                <section >
                    <div v-if="resultFound" class="cards">
                        <div class="cards__single" v-for="post in getSearchResult.contentList" :key="post.postId">
                            <post-card :postData="post"></post-card>
                        </div>
                    </div>
                    <div v-else  class="cards">
                        <v-card class="cards__notfound" style="min-width: 63vw; min-height: 115vh;">
                            <v-img src="https://cdn.dribbble.com/users/1053528/screenshots/4341024/not-found.jpg">
                            </v-img>
                        </v-card>
                    </div>
                </section>
                <section class="pagination">
                    <div class="text-center">
                        <v-pagination
                        v-model="currentPage"
                        :length="totalPage"
                        circle
                        ></v-pagination>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script src='./js/newsfeeds.js'></script>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-direction: row ;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 90px;
}
.section {
    align-self: center;
    &-left {
        flex-grow: 1;
        max-width: 30vw;
    }
    &-right {
        flex-grow: 2;
        max-width: 66%;
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
    justify-content: flex-start;
    min-height: 120vh;
    &__single {
        margin: 10px 20px;
        min-width: 28vw;
    }
    &____notfound {
        flex-grow: 1;
        width: 100%;
        height: 100%;
        text-align: center;
    }
}
.pagination {
    margin: 10px 0px;
}
</style>
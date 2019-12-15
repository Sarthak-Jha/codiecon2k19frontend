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
                <section class="cards">
                    <div class="cards__single" v-for="post in getSearchResult.contentList" :key="post.postId">
                        <post-card :postData="post"></post-card>
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

<script>
import postCard from '../components/PostCard'
import searchFilters from '../components/SearchFilters'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'newsfeeds',
    components: {
        postCard,
        searchFilters
    },
    mounted () {
        if (!this.$route.query.category) {
            let data = {
                'category' : 'all'
            }
            this.makeSearch({
                data,
                success: this.success,
                fail: this.fail,
                apiParam: this.currentPage
            })
        }
    },
    computed: {
        ...mapGetters('searchStore',['getSearchResult']),
        totalPage () {
            if (this.getSearchResult) {
                if (this.getSearchResult.totalElements%6 == 0) {
                    return this.getSearchResult.totalElements/6
                }
                return this.getSearchResult.totalElements/6 + 1
            }
            return 1
        }

    },
    methods: {
        ...mapActions('searchStore',['makeSearch'])

    },
    data () {
        return {
            currentPage: 1
        }
    }

}
</script>

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
    justify-content: space-evenly; 
    &__single {
        margin: 5px 30px;
        min-width: 28vw;
    }
}
.pagination {
    margin: 10px 0px;
}
</style>
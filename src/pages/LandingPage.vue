<template>
    <main>
        <div class="parallax">
            <section class="welcome">
                <input class="welcome__search" type="text" placeholder="What are you upto today?" v-model="searchTerm">
                <v-btn class="welcome__button" @click="searchNews()">Search</v-btn>
            </section>
            <section class="paragraph">
                :))
                <section class="cards">
                    <div v-if="getAllCategories.length" class="text-center" v-for="category in categories" :key="category.categoryId">
                        <activitycard :category="category" @clicked="selectedCategory">
                        </activitycard>
                    </div>
                </section>
            </section>
            <section>
                <div class="heading">
                    <h1>Our Solutions</h1>
                </div>
                <v-timeline>
                    <div v-for="data in timelinedata" :key="data.index">
                        <timelineitem :timelinedata="data">
                        </timelineitem>
                    </div>
                </v-timeline>
            </section>
        </div>
    </main>
</template>

<script src='./js/landingpage.js'></script>

<style lang="scss" scoped>
.text-center {
    margin: 10px 10px;
}
.cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 80px;
}
.heading {
    align-self: center;
    background: #ffffff;
    border-radius: 10px;
    margin: 100px 500px 0px 500px;
    text-align: center;
}
.parallax {
    /* The image used */
    background-image: url("../assets/low_poly_smoke_purple-2560x1440.jpg");
    /* Set a specific height */
    min-height: 1000px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.welcome {
    min-height: 500px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__search {
        position: relative;
        color: #777;
        opacity: 0.9;
        background-color: #ffffff;
        border-radius: 7px;
        filter: alpha(opacity=60);
        text-align:center;
        min-height: 50px;
        min-width: 550px;
        outline: none;
    }
    &__button{
        margin-left: 20px;
        min-height: 50px;
    }
}
.paragraph {
    color: #777;
    opacity: 0.9;
    background-color: #ffffff;
    filter: alpha(opacity=90);
    text-align:center;
    min-height: 300px;
    padding:50px 80px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
}

</style>

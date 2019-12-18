<template>
    <v-card
            class="mx-auto"
            min-width="200"
    >
        <router-link class="link" to="/postform">
            <v-img
                    class="black--text align-end categoryImage"
                    height="150px"
                    width= "300px"
                    :src="category.categoryImage"
                    @click="selectedCategory(category)"
            >
            </v-img>
            <v-card-title class="cardTitle">{{category.categoryName}}</v-card-title>
        </router-link>
    </v-card>
</template>

<script src='./js/categorypage.js'>

</script>

<style lang="scss" scoped>
    .link {
        text-decoration: none;
        color: white;
    }
    .cardTitle{
        color: black;
    }
    .categoryImage{
        background-size: contain !important;
    }
</style>

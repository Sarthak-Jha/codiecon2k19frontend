<template>
  <v-card
    class="mx-auto"
    min-width="200"

    @click="selectedCategory(category.categoryId)"
  >
    <v-img
      class="black--text align-end"
      height="150px"
      width= "300px"
      :src="category.categoryImage"
    >
    </v-img>
    <v-card-title>{{category.categoryName}}</v-card-title>
  </v-card>
</template>

<script src='./js/activitycard.js'>

</script>


<style lang="scss" scoped>

</style>>

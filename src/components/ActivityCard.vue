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
      <v-card-title>{{category.categoryName}}</v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
    name: 'activityCard',
    props: {
        category: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    methods: {
        selectedCategory (id) {
            this.$emit('category', id)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>>

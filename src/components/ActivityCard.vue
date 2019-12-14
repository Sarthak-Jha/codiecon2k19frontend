<template>
  <v-card
    class="mx-auto"
    min-width="200"
    
    @click="selectedCategory"
  >
    <v-img
      class="white--text align-end"
      height="150px"
      width= "300px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{category}}</v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
    name: 'activityCard',
    props: {
        category: {
            type: String,
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


<style>

</style>
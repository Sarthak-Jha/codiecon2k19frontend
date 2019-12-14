<template>
    <v-col cols="12" sm="6" md="4">
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            :label="labelName"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
      </v-menu>
    </v-col>
</template>

<script>
export default {
    name: 'datePicker',
    props: {
        labelName: {
            type: String,
            default: "From",
            required: true
        }
    },
    data () {
        return {
            date: new Date().toISOString().substr(0, 10),
            menu: false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
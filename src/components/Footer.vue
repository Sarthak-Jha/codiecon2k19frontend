<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">

        This is the brain child of all the members of Helping Hand made during the CodieCon conducted at Coviam Technologies during 13 -16 December, 2019. We reserve all rights to abstain anyone from using
        the product as we want to do it.
        <br>#1026, HSR Layout, Sector-5, 22nd Main, Bengaluru - 560022 <br>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>HelpingHand @ copyright All rights reserved</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
  icons: [
    'fab fa-facebook',
    'fab fa-twitter',
    'fab fa-google-plus',
    'fab fa-linkedin',
    'fab fa-instagram',
    ],
  }),
}
</script>

<style scoped>
</style>

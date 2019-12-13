<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <a href="https://www.facebook.com" target="blank">
          <v-btn class="mx-4 white--text" icon>
            <img class="icons" src='../assets/svg/021-facebook.svg'>
          </v-btn>
        </a>
        <a href="https://www.telegram.com" target="blank">
          <v-btn class="mx-4 white--text" icon>
            <img class="icons" src='../assets/svg/029-telegram.svg'>
          </v-btn>
        </a>
        <a href="https://www.skype.com" target="blank">
          <v-btn class="mx-4 white--text" icon>
            <img class="icons" src='../assets/svg/013-skype.svg'>
          </v-btn>
        </a>
        <a href="https://www.whatsapp.com" target="blank">
          <v-btn class="mx-4 white--text" icon>
            <img class="icons" src='../assets/svg/035-whatsapp.svg'>
          </v-btn>
        </a>
        <a href="https://www.linkedin.com" target="blank">
          <v-btn class="mx-4 white--text" icon>
            <img class="icons" src='../assets/svg/045-linkedin.svg'>
          </v-btn>
        </a>
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

  }),
}
</script>

<style scoped>
.icons {
  max-width: 22px;
  max-height: 22px;
}
</style>

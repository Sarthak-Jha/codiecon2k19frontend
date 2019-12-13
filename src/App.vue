<template>
  <v-app class="main">
    <div class="head">
      <navbar></navbar>
    </div>
    <landing-page></landing-page>
    <div class="footer">
      <v-content>
      <foot></foot>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar';
import Foot from './components/Footer';
import LandingPage from './components/LandingPage';

export default {
  name: 'App',
  components: {
    Navbar,
    Foot,
    LandingPage
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.main {
    display: flex;
    flex-flow: row wrap;
}
.head {
    width: 100%;
    align-self: flex-start;
}
.footer {
    width: 100%;
    align-self: flex-end;
}
</style>

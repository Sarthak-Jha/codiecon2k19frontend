<template>
  <v-app class="main">
    <div class="head">
      <navbar></navbar>
    </div>
      <router-view></router-view>
    <div class="footer">
      <v-content>
      <foot></foot>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Foot from './components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Foot
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-flow: row wrap;
}
.head {
    width: 100%;
    position: fixed;
    z-index: 5;
    align-self: flex-start;
}
.footer {
    width: 100%;
    align-self: flex-end;
}
</style>

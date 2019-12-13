<template>
  <v-app>
    <navbar></navbar>
    <v-content>
      <HelloWorld/>
    </v-content>
    <footer></footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

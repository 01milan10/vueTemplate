<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style>
</style>

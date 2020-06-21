<template>
  <div class="pt-10">
    <Home />
    <Features />
    <About />
    <Testimonials />
    <Album />
  </div>
</template>

<script>
import Home from "@/components/home/Home";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Album from "@/components/home/Album";
export default {
  components: {
    Home,
    Features,
    About,
    Testimonials,
    Album
  }
};
</script>

<style>
</style>
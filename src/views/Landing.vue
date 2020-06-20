<template>
  <div class="pt-10">
    <Home />
    <Features />
    <About />
  </div>
</template>

<script>
import Home from "@/components/home/Home";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
export default {
  components: {
    Home,
    Features,
    About
  }
};
</script>

<style>
</style>
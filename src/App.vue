<template>
  <Header class="header"/>
  <Intro />
  <Services :data="data.services"/>
  <Technologies :data="data.tools"/>
  <About :data="data.about"/>
  <Partners :data="data.partners"/>
  <Footer class="footer"/>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Intro from "./components/Intro.vue";
import Services from "./components/Services.vue";
import Technologies from "./components/Technologies.vue";
import About from "./components/About.vue";
import Partners from "./components/Partners.vue";
import data from "/data/data.json";
</script>
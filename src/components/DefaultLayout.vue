<template>
  <div class="relative">
    <Header/>
    <slot></slot>
    <Footer/>
  </div>
</template>

<script>
import Header from "./partials/Header.vue";
import Footer from "./partials/Footer.vue";
export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
  },
}
</script>

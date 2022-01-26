<template>
  <slot></slot>
  <Footer/>
</template>

<script>
import Footer from "./partials/Footer.vue";
export default {
  name: 'Layout',
  components: {
    Footer,
  },
}
</script>

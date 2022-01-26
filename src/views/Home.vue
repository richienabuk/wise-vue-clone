<template>
  <DefaultLayout>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <FaqBlock />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../components/DefaultLayout.vue";
import FaqBlock from "../components/Home/FaqBlock.vue";
export default {
  name: 'Home page',
  components: {
    DefaultLayout,
    FaqBlock
  },
}
</script>

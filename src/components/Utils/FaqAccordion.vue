<template>
  <div class="grid gap-4 sm:gap-6 grid-rows-1fr grid-cols-1fr-min mt-2 rounded-sm p-4 bg-white">
    <div>
      <h3 class="text-primary h4 md:text-md md:[line-height: 1.33333333]" @click="toggle()" :aria-expanded="isOpen" aria-controls="collapse">
        <slot name="title" />
      </h3>
      <div class="mt-4">
        <div v-show="isOpen" id="collapse">
          <slot name="content" />
        </div>
      </div>
    </div>
    <div>
        <span class="text-accent" aria-hidden="true" role="presentation">
           <svg class="w-3 transition-all duration-200 transform" :class="{ 'rotate-180': isOpen, 'rotate-0': !isOpen }"
                   fill="currentColor"
                   stroke="currentColor"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 16 10"
                   aria-hidden="true"
               >
            <path d="M15 1.2l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq accordion',
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

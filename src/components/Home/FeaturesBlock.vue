<template>
  <div id="features" class="container md:mt-20 md:mb-16 my-8">
      <h2 class="text-center h1 my-0 md:text-title-big text-title-small font-bold md:leading-tight">
        <div class="max-w-4xl mx-auto">Available for you in
<!--          <div class="tw-select btn-group btn-block dropdown">
            <button class="btn btn-input btn-md dropdown-toggle" type="button" aria-expanded="false">
              <span>Nigeria</span>
              <span
                  class="tw-icon tw-icon-chevron-up tw-chevron chevron-color bottom tw-icon tw-chevron-up-icon tw-chevron bottom tw-select-chevron"
                  aria-hidden="true" role="presentation">
                <svg width="16" height="16" fill="currentColor" focusable="false">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"></path>
                </svg>
              </span>
            </button>
          </div>-->
        </div>
      </h2>
    <div class="grid lg:gap-8 lg:grid-cols-4 sm:gap-4 sm:grid-cols-2 lg:mt-8">
      <div class="w-full text-center" v-for="item in entries" :key="item.id">
        <img class="productAvailabilitySection__productImage"
             :src="item.image" alt="" loading="lazy">
        <h3 class="md:text-[1.375rem] md:leading-[1.36363636] mt-0 mb-0">
          {{ item.title }}
        </h3>
        <div>
          <p class="mt-2 mb-0">{{ item.description }}</p>
          <p class="mt-2 mb-0" v-if="item.link">
            <a target="_self" class="text-accent" href="#">{{ item.link }}
              <span class="inline-block rotate-90" role="presentation" aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" focusable="false">
                <path fill-rule="evenodd" d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path>
              </svg>
            </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features block',
  data() {
    return {
      entries: [
        {
          id: 1,
          title: 'Send money cheaper and easier than old-school banks.',
          description: 'Send money at the real exchange rate with no hidden fees.',
          image: '/images/send.jpg',
          link: 'Send money'
        },
        {
          id: 2,
          title: 'Spend abroad without the hidden fees.',
          description: 'We haven’t reached Nigeria with our debit card feature yet.',
          image: '/images/spend-unavailable.jpg',
          link: ''
        },
        {
          id: 3,
          title: 'Receive payments like a local in 9 currencies.',
          description: 'Get your own UK account number, Euro IBAN, US routing number, and more.',
          image: '/images/receive.jpg',
          link: 'See all account details'
        },
        {
          id: 4,
          title: 'Convert and hold 54 currencies.',
          description: 'Holding multiple currencies is completely free, and we use the real exchange rate to convert.',
          image: '/images/hold.jpg',
          link: 'See all currencies'
        },
      ]
    }
  }
}
</script>

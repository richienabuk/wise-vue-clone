<template>
  <div class="md:py-16 py-8">
    <div class="container">
      <div class="text-center">
        <b class="font-semibold tracking-normal text-secondary">Coverage</b>
        <h2 class="text-primary block-title">Get these local account details</h2>
        <p class="text-secondary mt-4 mb-0 text-center md:w-2/3 w-full mx-auto">
          These are the account details you can share with others to receive money. Anyone can use these to pay you just like they'd pay a local.
        </p>
      </div>
      <div class="mt-8">
        <div class="grid gap-2 grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6">
          <div v-for="item in localDetails" :key="item.id" class="flex sm:p-6 p-4 border-bd-neutral border border-solid rounded-[2px] flex-col">
            <h3 class="flex h4 my-0 items-start font-bold text-primary md:text-md leading-none">
              <div class="inline-block w-6 h-4 mr-4 bg-cover" :style="{backgroundImage: `url(${item.flag})`}"></div>
              {{ item.currency }}
            </h3>
            <div class="flex flex-col justify-between grow">
              <p class="mt-4 mb-2">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Coverage block',
  data() {
    return {
      localDetails: [
        {
          id: 1,
          currency: 'British pound',
          description: 'UK sort code, Account number, and IBAN',
          flag: '/images/flags/gbp.png',
        },
        {
          id: 2,
          currency: 'Euro',
          description: 'Bank code (SWIFT/BIC) and IBAN',
          flag: '/images/flags/eur.png',
        },
        {
          id: 3,
          currency: 'US dollar',
          description: 'Routing number and Account number',
          flag: '/images/flags/usd.png',
        },
        {
          id: 4,
          currency: 'Australian dollar',
          description: 'BSB code and Account number',
          flag: '/images/flags/aud.png',
        },
        {
          id: 5,
          currency: 'New Zealand dollar',
          description: 'Account number',
          flag: '/images/flags/nzd.png',
        },
        {
          id: 6,
          currency: 'Singapore dollar',
          description: 'Bank code, Bank name, and Account number',
          flag: '/images/flags/sgd.png',
        },
        {
          id: 7,
          currency: 'Canadian dollar',
          description: 'Institution number, Transit number, and Account number',
          flag: '/images/flags/cad.png',
        },
        {
          id: 8,
          currency: 'Hungarian forint',
          description: 'Account number',
          flag: '/images/flags/huf.png',
        },
        {
          id: 9,
          currency: 'Turkish lira',
          description: 'Bank name and IBAN',
          flag: '/images/flags/sgd.png',
        },
      ]
    }
  }
}
</script>

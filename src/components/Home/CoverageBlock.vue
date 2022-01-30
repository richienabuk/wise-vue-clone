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
              <div class="inline-block w-6 h-4 mr-4 bg-cover shadow-flags" :style="{backgroundImage: `url(${item.flag})`}"></div>
              {{ item.currency }}
            </h3>
            <div class="flex flex-col justify-between grow">
              <p class="mt-4 mb-2">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="md:mt-16 mt-8">
        <div class="text-center">
          <h2 class="text-primary block-title">Hold and convert money</h2>
          <p class="text-secondary mt-4 mb-0 text-center md:w-2/3 w-full mx-auto">
            You can hold and convert money in 54 currencies. It only takes a few seconds to open a new balance in the currency you need.
          </p>
        </div>
        <div class="mt-8">
          <div class="flex mb-0 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-4 md:gap-8">
            <div v-for="item in convertCountries" :key="item.id" class="px-4 w-full text-left rounded-[2px]">
              <div class="flex items-center leading-none">
                <div class="inline-block w-6 h-4 -mt-[3px] mr-4 shadow-flags bg-cover" :style="{backgroundImage: `url(${item.flag})`}"></div>
               <span class="text-secondary">{{ item.currency }}</span>
              </div>
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
      ],
      convertCountries: [
        {
          id: 1,
          currency: 'UAE dirham',
          flag: '/images/flags/aed.png',
        },
        {
          id: 2,
          currency: 'Argentine peso',
          flag: '/images/flags/ars.png',
        },
        {
          id: 3,
          currency: 'Australian dollar',
          flag: '/images/flags/aud.png',
        },
        {
          id: 4,
          currency: 'Bangladeshi taka',
          flag: '/images/flags/bdt.png',
        },
        {
          id: 5,
          currency: 'Bulgarian lev',
          flag: '/images/flags/bgn.png',
        },
        {
          id: 6,
          currency: 'Botswana pula',
          flag: '/images/flags/bwp.png',
        },
        {
          id: 7,
          currency: 'Canadian dollar',
          flag: '/images/flags/cad.png',
        },
        {
          id: 8,
          currency: 'Swiss franc',
          flag: '/images/flags/chf.png',
        },
        {
          id: 9,
          currency: 'Chilean peso',
          flag: '/images/flags/clp.png',
        },
        {
          id: 10,
          currency: 'Chinese yuan',
          flag: '/images/flags/cny.png',
        },
        {
          id: 11,
          currency: 'Costa Rican colón',
          flag: '/images/flags/crc.png',
        },
        {
          id: 12,
          currency: 'Czech koruna',
          flag: '/images/flags/czk.png',
        },
        {
          id: 13,
          currency: 'Danish krone',
          flag: '/images/flags/dkk.png',
        },
        {
          id: 14,
          currency: 'Egyptian pound',
          flag: '/images/flags/egp.png',
        },
        {
          id: 15,
          currency: 'Euro',
          flag: '/images/flags/eur.png',
        },
        {
          id: 16,
          currency: 'British Pound',
          flag: '/images/flags/gbp.png',
        },
        {
          id: 17,
          currency: 'Georgian lari',
          flag: '/images/flags/gel.png',
        },
        {
          id: 18,
          currency: 'Ghanaian cedi',
          flag: '/images/flags/ghs.png',
        },
        {
          id: 19,
          currency: 'Hong Kong dollar',
          flag: '/images/flags/hkd.png',
        },
        {
          id: 20,
          currency: 'Croatian kuna',
          flag: '/images/flags/hrk.png',
        },
        {
          id: 21,
          currency: 'Hungarian forint',
          flag: '/images/flags/huf.png',
        },
        {
          id: 22,
          currency: 'Indonesian rupiah',
          flag: '/images/flags/idr.png',
        },
        {
          id: 23,
          currency: 'Israeli shekel',
          flag: '/images/flags/ils.png',
        },
        {
          id: 24,
          currency: 'Indian rupee',
          flag: '/images/flags/inr.png',
        },
        {
          id: 25,
          currency: 'Japanese yen',
          flag: '/images/flags/jpy.png',
        },
        {
          id: 26,
          currency: 'Kenyan shilling',
          flag: '/images/flags/kes.png',
        },
        {
          id: 27,
          currency: 'South Korean won',
          flag: '/images/flags/krw.png',
        },
        {
          id: 28,
          currency: 'Sri Lankan rupee',
          flag: '/images/flags/lkr.png',
        },
        {
          id: 29,
          currency: 'Moroccan dirham',
          flag: '/images/flags/mad.png',
        },
        {
          id: 30,
          currency: 'Mexican peso',
          flag: '/images/flags/mxn.png',
        },
        {
          id: 31,
          currency: 'Malaysian ringgit',
          flag: '/images/flags/myr.png',
        },
        {
          id: 32,
          currency: 'Nigerian naira',
          flag: '/images/flags/ngn.png',
        },
        {
          id: 33,
          currency: 'Norwegian krone',
          flag: '/images/flags/nok.png',
        },
        {
          id: 34,
          currency: 'Nepalese rupee',
          flag: '/images/flags/npr.png',
        },
        {
          id: 35,
          currency: 'New Zealand dollar',
          flag: '/images/flags/nzd.png',
        },
        {
          id: 36,
          currency: 'Peruvian sol',
          flag: '/images/flags/pen.png',
        },
        {
          id: 37,
          currency: 'Philippine peso',
          flag: '/images/flags/php.png',
        },
        {
          id: 38,
          currency: 'Pakistani rupee',
          flag: '/images/flags/pkr.png',
        },
        {
          id: 39,
          currency: 'Polish złoty',
          flag: '/images/flags/pln.png',
        },
        {
          id: 40,
          currency: 'Romanian lei',
          flag: '/images/flags/ron.png',
        },
        {
          id: 41,
          currency: 'Russian ruble',
          flag: '/images/flags/rub.png',
        },
        {
          id: 42,
          currency: 'Swedish krona',
          flag: '/images/flags/sek.png',
        },
        {
          id: 43,
          currency: 'Singapore dollar',
          flag: '/images/flags/sgd.png',
        },
        {
          id: 44,
          currency: 'Thai baht',
          flag: '/images/flags/thb.png',
        },
        {
          id: 45,
          currency: 'Turkish lira',
          flag: '/images/flags/try.png',
        },
        {
          id: 46,
          currency: 'Tanzanian shilling',
          flag: '/images/flags/tzs.png',
        },
        {
          id: 47,
          currency: 'Ukrainian hryvnia',
          flag: '/images/flags/uah.png',
        },
        {
          id: 48,
          currency: 'Ugandan shilling',
          flag: '/images/flags/ugx.png',
        },
        {
          id: 49,
          currency: 'US dollar',
          flag: '/images/flags/usd.png',
        },
        {
          id: 50,
          currency: 'Uruguayan peso',
          flag: '/images/flags/uyu.png',
        },
        {
          id: 51,
          currency: 'Vietnamese dong',
          flag: '/images/flags/vnd.png',
        },
        {
          id: 52,
          currency: 'West African franc',
          flag: '/images/flags/xof.png',
        },
        {
          id: 53,
          currency: 'South African rand',
          flag: '/images/flags/zar.png',
        },
        {
          id: 54,
          currency: 'Zambian kwacha',
          flag: '/images/flags/zmw.png',
        }
      ],
    }
  }
}
</script>

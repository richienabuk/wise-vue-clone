<template>
  <div class="bg-neutral md:py-16 py-8">
    <div class="container">
      <div class="text-center">
        <b class="font-semibold tracking-normal text-secondary">Frequently asked questions</b>
        <h2 class="text-primary block-title">Let's answer some of your questions</h2>
      </div>
      <div class="mt-8 content">
        <div class="sm:p-6 text-left w-full" role="button" aria-expanded="true" tabindex="0">
          <faq-accordion v-for="item in entries" :key="item.id">
            <template v-slot:title>
              {{ item.title }}
            </template>
            <template v-slot:content>
              <div v-html="item.body" class="text-tiny text-secondary"></div>
              <div class="flex items-center" v-if="item.link">
                <a target="_blank" rel="noopener noreferrer" class="tw-link-with-chevron" href="#">
                  {{ item.link }}
                  <span class="text-accent inline-block rotate-90" role="presentation" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" focusable="false">
                      <path fill-rule="evenodd" d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </template>
          </faq-accordion>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FaqAccordion from "../Utils/FaqAccordion.vue";
export default {
  name: 'Faq Block',
  components: {
    FaqAccordion
  },
  data() {
    return {
      entries: [
        {
          id: 1,
          title: 'What is a multi-currency account and how does it work?',
          body: '<p>You can hold, receive, send, and spend money using a Wise multi-currency account.</p>\n' +
              '<p>You can hold more than 50 currencies, and convert between them at the real exchange rate whenever you need.</p>\n' +
              '<p>You can get <a href="#" target="_blank">account details</a> for some currencies to receive money from around the world.</p>\n' +
              '<p>You can send money from your account to a bank account whenever you like — we\'ll charge a<a href="#" target="_blank">fixed fee</a> when you do this, and a conversion fee when you send to a different currency.</p>\n' +
              '<p>And, you can spend the currencies in your account around the world with the <a href="#" target="_blank">Wise debit card</a>. Find out if the Wise card is available in your country.</p>',
          link: 'Learn more about the multi-currency account in this video',
        },
        {
          id: 2,
          title: 'How is the Wise account different from a bank account?',
          body: '<p>Your Wise account is an electronic money account. It’s different from a bank account because:</p>\n' +
              '<ul>\n' +
              '    <li>Your money is <a href="#" target="_blank">safeguarded</a> and not covered by the Financial Services Compensation Scheme (FSCS) or another protection scheme that you would get with a bank account.</li>\n' +
              '    <li>You can’t get an overdraft or loan.</li>\n' +
              '    <li><b>You won’t earn interest.</b></li>\n' +
              '</ul>',
          link: 'Read more about the benefits of a multi-currency account',
        },
        {
          id: 3,
          title: 'Can I hold multiple currencies in a Wise account?',
          body: '<p>You can <a href="#" target="_blank">add money</a> to your account in 19+ currencies and hold 50+ currencies.</p>\n' +
                '<p>You can convert money between any of the currencies in your account — always with the real exchange rate. We’ll charge a low conversion fee to do this.</p>\n',
          link: 'Find out more about which currencies are available'
        },
        {
          id: 4,
          title: 'What is a multi-currency card?',
          body: '<p>The Wise debit card lets you spend money around the world with low conversion fees and zero transaction fees. It’s currently available for multi-currency account-holder residents in the UK, US, Australia, New Zealand, Singapore, Malaysia, Japan, Switzerland and EEA.</p>',
          link: 'Here are some tips to help you get started',
        },
        {
          id: 5,
          title: 'What happened to the borderless account?',
          body: '<p>The Wise multi-currency account is the same account you know and love. The only change is in the name — we used to call it the borderless account.</p>',
          link: null,
        },
      ]
    }
  }
}
</script>

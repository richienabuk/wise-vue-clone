<template>
  <div class="bg-neutral md:py-16 py-8">
    <div class="container">
      <div class="text-center">
        <b class="font-semibold tracking-normal text-secondary">Security</b>
        <h2 class="text-primary block-title">Protecting you and your money</h2>
        <p class="text-secondary mt-4 mb-0 text-center md:w-2/3 w-full mx-auto">Every month, our customers trust us to move
          over £<!-- --> 6<!-- --> billion of their money. Here are some of the important ways we protect them.
        </p>
      </div>
      <div class="grid grid-rows-6 gap-6 pt-8 grid-cols-1 md:grid-cols-2 md:grid-rows-3 md:pt-16">
        <div v-for="item in entries" :key="item.id" class="sm:p-6 p-4 w-full bg-white border border-neutral text-left rounded-sm">
          <div class="grid gap-4 grid-cols-10 grid-rows-none md:gap-6">
            <img class="self-start md:self-center col-span-2"
                 :src="item.icon"
                 alt="" loading="lazy">
            <div class="col-span-8">
              <h3 class="h4 mt-1">{{ item.title }}</h3>
              <p class="hidden md:block mb-0 mt-4 text-secondary">
                <span v-html="item.description"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center">
        Online scams are on the rise.
        <a href="#" target="_blank">Learn how to stay safe</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Security Block',
  data() {
    return {
      entries: [
        {
          id: 1,
          title: 'Safeguarded with leading banks',
          description: '<span>We hold your money with established financial institutions, so it’s separate from our own accounts and in our normal course of business not accessible to our partners. Read more <a href="#" target="_blank">here</a>.</span>',
          icon: '/images/illustrations/safeguarded_leading_banks.svg',
        },
        {
          id: 2,
          title: 'Regulated around the world',
          description: 'We’re regulated by authorities around the world. This includes the FCA in the UK and FinCEN in the US.',
          icon: '/images/illustrations/regulated_by_fcg.svg',
        },
        {
          id: 3,
          title: 'Audited regularly',
          description: 'We make sure your money’s secure, and that Wise is financially stable. As we’re not a bank, your money isn’t FSCS protected — instead we safeguard it.',
          icon: '/images/illustrations/segragated_accounts.svg',
        },
        {
          id: 4,
          title: 'Extra-secure transactions',
          description: 'We use 2-factor authentication to protect your account and transactions. That means you — and only you — can get to your money.',
          icon: '/images/illustrations/secure_transations.svg',
        },
        {
          id: 5,
          title: 'Data protection',
          description: 'We’re committed to keeping your personal data safe, and we’re transparent in how we collect, process, and store it.',
          icon: '/images/illustrations/data_protection.svg',
        },
        {
          id: 6,
          title: 'Dedicated anti-fraud team',
          description: 'We work round the clock to keep your account and money protected from even the most sophisticated fraud.',
          icon: '/images/illustrations/dedicated_fraud_team.svg',
        },
      ]
    }
  }
}
</script>

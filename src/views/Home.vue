<template>
  <DefaultLayout>
    <HeroBlock />
    <FeaturesBlock />
    <div id="usecase-abroad" class="two-col-section lg:min-h-[800px]">
      <div class="two-col-section-img lg:order-2 bg-gradient-to-bl from-neutral to-neutral bg-[url('/images/abroad_section.jpeg')]"></div>
      <div class="two-col-section-content lg:order-1">
        <div class="max-w-xl">
          <h2 class="h1 my-0 md:text-title-big text-title-small font-bold md:leading-tight">Moving and living abroad just got simpler</h2>
          <p class="mt-2 mb-0 md:hidden block">Receive your salary, pension, and more. Spend in local currency with your card. Move your money between countries with ease. It’s the better way to send money home.</p>
          <h3 class="mt-4 mb-0 md:text-md hidden md:block">Receive your salary, pension, and more.</h3>
          <p class="mt-2 mb-0 hidden md:block">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
          <h3 class="mt-4 mb-0 md:text-md hidden md:block">Spend in local currency with your card.</h3>
          <p class="mt-2 mb-0 hidden md:block">Avoid the bank appointments, and start spending as soon as you get there. With the Wise debit card, you’ll always get the best possible exchange rate.</p>
          <h3 class="mt-4 mb-0 md:text-md hidden md:block">Move your money between countries.</h3>
          <p class="mt-2 mb-0 hidden md:block">Send money to 80 countries, always with a low and transparent fee. With Direct Debits in the UK, Europe, US and Canada, paying your bills and subscriptions across currencies is easier than ever.</p>
        </div>
      </div>
    </div>
    <div id="usecase-shopping" class="two-col-section lg:min-h-[800px]">
      <div class="two-col-section-img bg-gradient-to-bl from-neutral to-neutral bg-[url('/images/shopping.jpg')]"></div>
      <div class="two-col-section-content">
        <div class="max-w-xl">
          <h2 class="h1 my-0 md:text-title-big text-title-small font-bold md:leading-tight">Shopping through overseas online stores</h2>
          <p class="mt-2 mb-0 md:hidden block">Pay at the real exchange rate. Avoid sneaky bank exchange rate markups and high foreign transaction fees. Pay only a low upfront conversion fee, and no annual card fee.</p>
          <h3 class="mt-4 mb-0 md:text-md hidden md:block">Pay at the real exchange rate.</h3>
          <p class="mt-2 mb-0 hidden md:block">Avoid sneaky bank exchange rate markups and high foreign transaction fees. Pay only a low upfront conversion fee, and no annual card fee.</p>
          <h3 class="mt-4 mb-0 md:text-md hidden md:block">Always pay in the local currency.</h3>
          <p class="mt-2 mb-0 hidden md:block">If you’re shopping online, always choose to pay in the currency of the country you’re buying from. If you don’t have it in your account, the card will automatically convert to it from the balance that’s cheapest for you. You’ll avoid Dynamic Currency Conversion fees.</p>
          <h3 class="mt-4 mb-0 md:text-md hidden md:block">Pay online securely with instant notifications.</h3>
          <p class="mt-2 mb-0 hidden md:block">Authorise payments with 3-D Secure authentication. Receive instant notifications when you spend.</p>
        </div>
    </div>
    </div>
    <div id="usecase-receive" class="two-col-section lg:min-h-[800px]">
      <div class="two-col-section-img lg:order-2 bg-gradient-to-bl from-neutral to-neutral bg-[url('/images/receive-section.jpeg')] items-end flex justify-start">
        <div class="flex items-center">
          <div class="pb-6 pl-6 md:pb-10 md:pl-10">
            <svg viewBox="0 0 181 47" fill="none" class="w-24 h-7 lg:w-48 lg:h-12">
              <path d="M33.089 4.225c-2.12-2.415-5.95-3.45-10.85-3.45H8.02a2.037 2.037 0 00-2.012 1.717L.088 40.048a1.22 1.22 0 001.206 1.41h8.78l2.204-13.985-.068.438a2.03 2.03 0 012.004-1.718h4.172c8.195 0 14.613-3.329 16.487-12.958.056-.285.104-.562.146-.833.557-3.56-.004-5.982-1.93-8.176M140.555 22.096c-.536 3.524-3.227 3.524-5.83 3.524h-1.481l1.039-6.579a.818.818 0 01.808-.69h.68c1.772 0 3.445 0 4.308 1.009.515.604.671 1.5.476 2.736zm-1.133-9.194h-9.817a1.37 1.37 0 00-1.349 1.152l-3.967 25.172a.826.826 0 00.187.658.805.805 0 00.621.287h5.037c.47 0 .87-.341.943-.805l1.127-7.139a1.365 1.365 0 011.347-1.151h3.106c6.468 0 10.199-3.128 11.174-9.331.439-2.712.017-4.843-1.252-6.336-1.396-1.64-3.871-2.508-7.155-2.508M70.517 22.096c-.536 3.524-3.227 3.524-5.83 3.524h-1.482l1.04-6.58a.818.818 0 01.807-.69h.68c1.772 0 3.445.001 4.308 1.01.517.604.672 1.5.477 2.736zm-1.132-9.194h-9.818c-.67 0-1.243.489-1.348 1.152l-3.968 25.172a.817.817 0 00.808.945h4.688c.671 0 1.242-.488 1.347-1.152l1.072-6.79a1.363 1.363 0 011.347-1.152h3.106c6.468 0 10.2-3.13 11.174-9.333.439-2.71.017-4.842-1.252-6.335-1.396-1.64-3.87-2.508-7.155-2.508h-.001zm22.792 18.232c-.456 2.686-2.586 4.49-5.306 4.49-1.364 0-2.456-.44-3.157-1.27-.696-.823-.957-1.996-.737-3.301.423-2.663 2.59-4.524 5.268-4.524 1.336 0 2.418.443 3.134 1.28.72.845 1.004 2.025.798 3.325zm6.551-9.152h-4.7a.818.818 0 00-.81.693l-.206 1.314-.329-.476c-1.018-1.478-3.287-1.972-5.553-1.972-5.193 0-9.63 3.936-10.493 9.455-.45 2.755.189 5.387 1.75 7.223 1.435 1.688 3.481 2.39 5.92 2.39 4.188 0 6.51-2.688 6.51-2.688l-.211 1.306a.817.817 0 00.809.945h4.232c.671 0 1.243-.487 1.348-1.151l2.542-16.092a.818.818 0 00-.81-.945M162.249 31.134c-.455 2.686-2.585 4.49-5.306 4.49-1.363 0-2.455-.44-3.156-1.27-.696-.823-.957-1.996-.737-3.301.423-2.663 2.588-4.524 5.268-4.524 1.335 0 2.418.443 3.134 1.28.72.845 1.004 2.025.797 3.325zm6.552-9.152H164.1a.82.82 0 00-.81.693l-.205 1.314-.329-.476c-1.018-1.477-3.287-1.972-5.553-1.972-5.192 0-9.629 3.936-10.493 9.455-.449 2.755.19 5.387 1.752 7.223 1.434 1.688 3.481 2.39 5.92 2.39 4.188 0 6.509-2.688 6.509-2.688l-.21 1.306a.811.811 0 00.185.66.812.812 0 00.621.285h4.232c.671 0 1.243-.487 1.349-1.151l2.542-16.092a.813.813 0 00-.022-.35.812.812 0 00-.788-.595M123.817 21.984h-4.727c-.451 0-.873.224-1.126.598l-6.519 9.6-2.763-9.225a1.367 1.367 0 00-1.307-.974h-4.644a.819.819 0 00-.775 1.083l5.202 15.273-4.893 6.904a.812.812 0 00-.058.849.82.82 0 00.726.442h4.721c.446 0 .865-.219 1.121-.586l15.713-22.68a.816.816 0 00.053-.845.815.815 0 00-.724-.44zM174.332 13.595l-4.03 25.633a.827.827 0 00.187.658.813.813 0 00.622.287h4.051c.671 0 1.243-.489 1.348-1.152l3.973-25.173a.812.812 0 00-.466-.87.814.814 0 00-.342-.075h-4.534a.82.82 0 00-.809.69" fill="#fff"></path><path d="M33.089 4.225c-2.12-2.415-5.95-3.45-10.85-3.45H8.02a2.037 2.037 0 00-2.012 1.717L.088 40.048a1.22 1.22 0 001.206 1.41h8.78l2.204-13.985-.068.438a2.03 2.03 0 012.004-1.718h4.172c8.195 0 14.613-3.329 16.487-12.958.056-.285.104-.562.146-.833.557-3.56-.004-5.982-1.93-8.176" fill="#fff"></path>
              <path d="M14.644 12.449a1.782 1.782 0 011.758-1.503h11.15c1.32 0 2.55.087 3.676.266.615.1 1.224.235 1.823.408.68.191 1.338.453 1.963.782.56-3.56-.003-5.982-1.928-8.177C30.966 1.812 27.137.776 22.238.776H8.016a2.037 2.037 0 00-2.01 1.718L.084 40.046a1.22 1.22 0 001.205 1.411h8.78l2.206-13.986 2.37-15.022z" fill="#fff"></path>
              <path d="M35.04 12.401c-.043.278-.091.556-.145.833-1.875 9.628-8.292 12.958-16.488 12.958h-4.173a2.027 2.027 0 00-2.002 1.718l-2.137 13.546-.607 3.843a1.068 1.068 0 001.055 1.235h7.401c.876 0 1.62-.638 1.758-1.502l.072-.377 1.395-8.84.089-.489a1.78 1.78 0 011.76-1.502h1.107c7.169 0 12.782-2.912 14.423-11.336.683-3.52.329-6.46-1.481-8.524a7.07 7.07 0 00-2.026-1.563z" fill="#fff"></path>
              <path d="M33.036 11.62c-.286-.085-.581-.161-.885-.228a15.7 15.7 0 00-.939-.177c-1.127-.184-2.357-.27-3.678-.27H16.386a1.777 1.777 0 00-1.758 1.504l-2.37 15.024-.068.437a2.027 2.027 0 012.003-1.718h4.173c8.196 0 14.613-3.329 16.488-12.958.055-.285.102-.561.145-.833a10.129 10.129 0 00-1.542-.65 16.512 16.512 0 00-.421-.133" fill="#fff"></path>
            </svg>
          </div>
          <div class="pl-0 pt-2 pb-6 md:pb-10">
            <svg viewBox="0 0 468 222.5" class="w-20 h-10 lg:w-40 lg:h-16">
              <path d="M414 113.4c0-25.6-12.4-45.8-36.1-45.8-23.8 0-38.2 20.2-38.2 45.6 0 30.1 17 45.3 41.4 45.3 11.9 0 20.9-2.7 27.7-6.5v-20c-6.8 3.4-14.6 5.5-24.5 5.5-9.7 0-18.3-3.4-19.4-15.2h48.9c0-1.3.2-6.5.2-8.9zm-49.4-9.5c0-11.3 6.9-16 13.2-16 6.1 0 12.6 4.7 12.6 16h-25.8zM301.1 67.6c-9.8 0-16.1 4.6-19.6 7.8l-1.3-6.2h-22v116.6l25-5.3.1-28.3c3.6 2.6 8.9 6.3 17.7 6.3 17.9 0 34.2-14.4 34.2-46.1-.1-29-16.6-44.8-34.1-44.8zm-6 68.9c-5.9 0-9.4-2.1-11.8-4.7l-.1-37.1c2.6-2.9 6.2-4.9 11.9-4.9 9.1 0 15.4 10.2 15.4 23.3 0 13.4-6.2 23.4-15.4 23.4zM223.8 61.7l25.1-5.4V36l-25.1 5.3zM223.8 69.3h25.1v87.5h-25.1zM196.9 76.7l-1.6-7.4h-21.6v87.5h25V97.5c5.9-7.7 15.9-6.3 19-5.2v-23c-3.2-1.2-14.9-3.4-20.8 7.4zM146.9 47.6l-24.4 5.2-.1 80.1c0 14.8 11.1 25.7 25.9 25.7 8.2 0 14.2-1.5 17.5-3.3V135c-3.2 1.3-19 5.9-19-8.9V90.6h19V69.3h-19l.1-21.7zM79.3 94.7c0-3.9 3.2-5.4 8.5-5.4 7.6 0 17.2 2.3 24.8 6.4V72.2c-8.3-3.3-16.5-4.6-24.8-4.6C67.5 67.6 54 78.2 54 95.9c0 27.6 38 23.2 38 35.1 0 4.6-4 6.1-9.6 6.1-8.3 0-18.9-3.4-27.3-8v23.8c9.3 4 18.7 5.7 27.3 5.7 20.8 0 35.1-10.3 35.1-28.2-.1-29.8-38.2-24.5-38.2-35.7z" fill="#fff"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="two-col-section-content lg:order-1">
        <div class="max-w-xl">
          <h2 class="h1 my-0 md:text-title-big text-title-small font-bold md:leading-tight">Receive money from around the world</h2>
          <p class="mt-2 mb-0 md:hidden block">Use your account details to receive and manage your earnings. Invoice like a local and manage your earnings from various online platforms and storefronts.</p>
          <h3 class="mt-4 mb-0 md:text-md hidden md:block">Get paid like a local.</h3>
          <p class="mt-2 mb-0 hidden md:block">UK account number, Euro IBAN, US routing number, and more.<!-- --> <!-- -->All in one account. Receive your salary, invoice payments, pension and profit from shares.</p>
          <h3 class="mt-4 mb-0 md:text-md hidden md:block">Work anywhere and link your account to Amazon, PayPal and more.</h3>
          <p class="mt-2 mb-0 hidden md:block">Use your account details to receive and manage your earnings. Invoice like a local and manage your earnings from various online platforms and storefronts.</p>
          <h3 class="mt-4 mb-0 md:text-md hidden md:block">Convert your money in seconds.</h3>
          <p class="mt-2 mb-0 hidden md:block">Receive payments from anywhere, and convert them to <!-- -->54<!-- --> currencies. You’ll always get the real exchange rate, and the low fees we’re known for.</p>
        </div>
    </div>
    </div>
    <div id="usecase-property" class="two-col-section lg:min-h-[800px]">
        <div class="two-col-section-img bg-gradient-to-bl from-neutral to-neutral bg-[url('/images/property-section.jpeg')]"></div>
        <div class="two-col-section-content">
          <div class="max-w-xl">
            <h2 class="h1 my-0 md:text-title-big text-title-small font-bold md:leading-tight">Take the stress out of managing property</h2>
            <p class="mt-2 mb-0 md:hidden block">Save when you buy property abroad.<!-- --> <!-- -->Pay your bills remotely.<!-- --> <!-- -->Receive payments from tenants.</p>
            <h3 class="mt-4 mb-0 md:text-md hidden md:block">Save when you buy property abroad.</h3>
            <p class="mt-2 mb-0 hidden md:block">Sending and managing money with Wise is on average <!-- -->6<!-- -->x cheaper than UK banks. And with our tiered pricing for large amounts, you get an even lower fee on any transfers over 100,000 GBP or equivalent in your currency.</p>
            <h3 class="mt-4 mb-0 md:text-md hidden md:block">Pay your bills remotely.</h3>
            <p class="mt-2 mb-0 hidden md:block">Hold <!-- -->54<!-- --> currencies in one place. Easily manage your mortgage and utility bills across currencies with Direct Debit in the UK, Europe, US and Canada, and pay tradespeople like a local.</p>
            <h3 class="mt-4 mb-0 md:text-md hidden md:block">Receive payments from tenants.</h3>
            <p class="mt-2 mb-0 hidden md:block">Get paid in <!-- -->9<!-- --> currencies with your own account details. And when the rate is right, convert your money in seconds.</p>
          </div>
        </div>
    </div>
    <div class="py-16 bg-[#485dc7]">
      <div class="container">
        <div class="text-center">
          <b class="font-semibold tracking-normal text-white">Getting started</b>
          <h2 class="text-white block-title md:max-w-3xl mx-auto leading-[1.14285714] my-2">Get set up and start spending with your card in minutes.</h2>
        </div>
        <p class="mt-4 mb-0 md:hidden text-white text-left md:text-center">Sign up online, or in our app. Verify your identity with a government ID and top up your account. Then you’re all set.</p>
        <div class="md:grid hidden md:grid-cols-2 gap-8 xl:grid-cols-4 md:mt-12 mt-8">
          <div class="text-center">
            <h3 class="h2 my-0 leading-[1.14285714] font-bold text-white text-[1.75rem] mb-2">Register in minutes</h3>
            <p class="mb-0 text-white">Sign up online, or in our app with an email address, or a Google, Facebook or Apple account.</p>
          </div>
          <div class="text-center">
            <h3 class="h2 my-0 leading-[1.14285714] font-bold text-white text-[1.75rem] mb-2">Verify your identity</h3>
            <p class="mb-0 text-white">All you need to receive money or order a card is your government ID.</p>
          </div>
          <div class="text-center">
            <h3 class="h2 my-0 leading-[1.14285714] font-bold text-white text-[1.75rem] mb-2">Top up your account</h3>
            <p class="mb-0 text-white">You can add money using your bank account, Apple Pay, credit/debit card.</p>
          </div>
          <div class="text-center">
            <h3 class="h2 my-0 leading-[1.14285714] font-bold text-white text-[1.75rem] mb-2">
              <svg class="w-[58px] h-[58px] mx-auto" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <circle cx="29" cy="29" r="28" stroke="currentColor" stroke-width="2"></circle>
                <path fill-rule="evenodd" d="M19.2998 30.3505L20.713 28.9485L26.002 34.1959L37.2866 23L38.6998 24.4021L26.002 37L19.2998 30.3505Z" fill="currentColor"></path>
              </svg>
            </h3>
            <p class="mb-0 text-white">Share your account details to get paid, or spend around the world with your debit card.</p>
          </div>
        </div>
        <p class="text-white mt-8 md:mt-16 mb-0 text-left md:text-center">
          <a class="min-w-[240px] text-white border border-white text-center inline-block min-h-[48px] rounded-[3px] px-6 pt-3 pb-2.5" href="#" target="_self">Get an account in minutes</a>
        </p>
      </div>
    </div>
    <div id="customer-support" class="two-col-section lg:min-h-[800px]">
      <div class="two-col-section-img lg:order-2 bg-gradient-to-bl from-neutral to-neutral bg-[url('/images/customer-support.jpg')]"></div>
      <div class="two-col-section-content lg:order-1">
        <div class="max-w-xl">
          <h2 class="h1 my-0 md:text-title-big text-title-small font-bold md:leading-tight">Global support in a range of languages</h2>
          <p class="mt-2 mb-0">We don’t do complicated, automated systems. We have offices around the world, and we’re
            here to help you whenever you need it.</p>
          <p class="mt-8 mb-0">
            <a class="border font-semibold text-center pt-3 px-6 pb-2.5 border-accent text-accent hover:bg-accent hover:text-white" href="#faq" rel="" target="_self">
              See most frequently asked questions
            </a>
          </p>
        </div>
      </div>
    </div>
    <SecurityBlock />
    <CoverageBlock />
    <FaqBlock />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../components/DefaultLayout.vue";
import FaqBlock from "../components/Home/FaqBlock.vue";
import CoverageBlock from "../components/Home/CoverageBlock.vue";
import SecurityBlock from "../components/Home/SecurityBlock.vue";
import FeaturesBlock from "../components/Home/FeaturesBlock.vue";
import HeroBlock from "../components/Home/HeroBlock.vue";
export default {
  name: 'Home page',
  components: {
    DefaultLayout,
    FaqBlock,
    CoverageBlock,
    SecurityBlock,
    FeaturesBlock,
    HeroBlock,
  },
}
</script>

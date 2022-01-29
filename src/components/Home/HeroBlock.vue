<template>
  <div class="bg-primary pb-6 pt-10 bg-[url('/images/hero-bg-small.svg')] text-neutral bg-cover bg-no-repeat bg-center lg:pb-16 lg:pt-28 lg:bg-[url('/images/hero-bg.svg')]" id="hero">
    <div class="container">
      <div class="lg:grid lg:grid-cols-2 lg:gap-16 w-full">
        <div class="flex flex-col text-center lg:text-left w-full">
          <div class="flex flex-col">
            <h1 class="block-title text-white lg:order-1 order-2 mb-4 leading-[1.14285714]"><span>The cheap, fast way to send money abroad.</span></h1>
            <div class="flex items-center justify-center lg:justify-start relative lg:order-2 order-1 lg:my-3 lg:py-8 my-6">
              <div class="h-[4.5rem] w-[4.5rem] lg:h-[6.875rem] lg:w-[6.875rem] relative before:animate-spin-slow before:translate-x-2/4 before:translate-y-2/4 before:scale-100 before:opacity-60 before:absolute before:h-full before:w-full before:bg-accent before:rounded-full before:content-[''] before:right-1/2 before:bottom-1/2 before:bg-accent before:border-none">
                <button type="button" aria-label="Play video" aria-expanded="false" class="h-full w-full text-accent rounded-full border-none overflow-hidden relative bg-[0 0]">
                  <svg viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg" class="rounded-full">
                    <circle cx="54.5" cy="54.5" r="53" fill="currentColor"></circle>
                    <path d="M72 54.6162L45.5758 69.8722L45.5758 39.3601L72 54.6162Z" fill="white"></path>
                  </svg>
                </button>
              </div>
              <button type="button" class="text-accent hidden lg:block bg-transparent pt-3 pb-2.5 px-6 rounded-sm font-semibold min-h-[3rem] text-md"
                      aria-label="Play video" aria-expanded="false">See how it works
              </button>
            </div>
          </div>
          <div class="mt-auto hidden lg:block">
            <div class="grid gap-4 grid-cols-2">
              <div class="lg:text-left justify-self-start">
                <div class="h4 text-white mt-2 text-md">Over <!-- -->12<!-- --> million customers</div>
                <a target="_blank" rel="noopener noreferrer" class="text-accent font-semibold text-tiny" href="#">Read on Trustpilot
                  <span class="inline-block rotate-90" role="presentation"
                    aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" focusable="false">
                      <path fill-rule="evenodd" d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div class="lg:text-left justify-self-start">
                <div class="h4 text-white mt-2 text-md">FCA regulated</div>
                <a target="_blank" rel="noopener noreferrer" class="text-accent font-semibold text-tiny" href="#">Learn more
                  <span class="inline-block rotate-90" role="presentation" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" focusable="false">
                      <path fill-rule="evenodd" d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col ml-auto lg:w-10/12 w-full">
          <div>
            <div>
              <div class="relative mb-0">
                <label class="absolute top-3 left-3.5 mb-0 z-10 text-secondary text-tiny" for="tw-calculator-source">You send</label>
                <div class="flex">
                  <input type="text" id="tw-calculator-source" placeholder="10.95" class="w-3/4 lg:w-2/3 text-md text-primary border border-blue rounded-l min-h-[72px] max-h-[72px] h-auto pt-7 pb-1 px-3 rounded-bl-sm rounded-tl-sm" />
                  <div class="w-1/4 lg:w-1/3 bg-[#2e4369] border-[#2e4369] border-t border-r border-b rounded-r text-blue-dark">
                    <div class="inline-flex w-full">
                      <button class="flex items-center h-[72px] pt-3.5 pb-3 px-4 w-full font-bold text-md justify-center" type="button" aria-expanded="false">
                        <span><i class="currency-flag currency-flag-gbp hidden sm:inline-block"></i>GBP</span>
                        <span class="inline-block rotate-180 static ml-3" aria-hidden="true" role="presentation">
                          <svg width="16" height="16" fill="currentColor" focusable="false">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="sequence">
                <li>
                  <span class="sequence-icon tw-calculator-breakdown__icon">–</span>
                  <span class="tw-calculator-breakdown-item__left">
                  <strong class="text-white">5.53 GBP</strong>
                </span>
                  <span class="tw-calculator-breakdown-item__right">
                  <span class="mr-2">
                    <div class="relative align-middle inline-block">
                      <button class="relative float-left text-left ml-0 pl-3 text-white bg-[#2e4369] border-[#2e4369] pt-1 pb-0.5 min-h-[32px] rounded-[2px] text-[14px] pr-8 h-8" type="button" aria-expanded="false">
                        <span>Low cost transfer</span>
                        <span class="inline-block rotate-180 margin-0 top-2 right-2 absolute" aria-hidden="true" role="presentation">
                          <svg width="16" height="16" fill="currentColor" focusable="false">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"></path>
                        </svg>
                        </span>
                      </button>
                    </div>
                  </span>
                  <span style="text-transform:none">fee</span>
                </span>
                </li>
                <li>
                  <span class="sequence-icon tw-calculator-breakdown__icon">=</span>
                  <span class="tw-calculator-breakdown-item__left">994.47 GBP</span>
                  <span class="tw-calculator-breakdown-item__right">Amount we’ll convert</span></li>
                <li>
                  <span class="sequence-icon tw-calculator-breakdown__icon">×</span>
                  <span class="tw-calculator-breakdown-item__left"><a role="button" tabindex="0">
                    <span class="font-bold text-accent">520.192</span>
                    <span class="ml-[0.25em] inline-block">
                      <svg viewBox="0 0 11 8" version="1.1" xmlns="http://www.w3.org/2000/svg" class="h-[0.75em]">
                        <defs><linearGradient x1="-12.7227783%" y1="100%" x2="125.65918%" y2="100%">
                          <stop stop-color="#00B9FE" offset="0%"></stop>
                          <stop stop-color="#2ED06F" offset="100%"></stop>
                        </linearGradient></defs>
                        <g fill-rule="evenodd"><g>
                          <path d="M6.12919677,0 C6.00679983,0 5.96090098,0.137696558 6.03739907,0.229494263 L7.16957076,1.36166596 L8.63833404,2.83042924 L9.77050574,3.96260093 C9.84700382,4.03909902 10,3.99320017 10,3.87080323 L10,0.137696558 C10,0.06119847 9.93880153,0 9.86230344,0 L6.12919677,0 Z" fill="#23ca8f"></path>
                          <polyline id="el_wWgIoPQu5o" points="0 6 3 3 5 5 8 2"></polyline>
                        </g>
                        </g>
                      </svg>
                    </span>
                  </a>
                  </span>
                  <span class="tw-calculator-breakdown-item__right">
                    <span class="np-popover">
                      <span class="inline-block">
                        <button type="button" class="border-b border-dotted border-accent hover:text-accent">
                          <span>Guaranteed rate</span>
                        </button>
                      </span>
                    </span>
                    <span class="whitespace-nowrap"> (44 hrs)</span>
                  </span>
                </li>
              </ul>



              <div class="relative mb-0">
                <label class="absolute top-3 left-3.5 mb-0 z-10 text-secondary text-tiny" for="tw-calculator-target">Recipient <!-- --> gets<!-- --> </label>
                <div class="flex">
                  <input type="text" id="tw-calculator-target" placeholder="10.95" class="w-3/4 lg:w-2/3 text-md text-primary border border-blue rounded-l min-h-[72px] max-h-[72px] h-auto pt-7 pb-1 px-3 rounded-bl-sm rounded-tl-sm" />
                  <div class="w-1/4 lg:w-1/3 bg-[#2e4369] border-[#2e4369] border-t border-r border-b rounded-r text-blue-dark">
                    <div class="inline-flex w-full">
                      <button class="flex items-center h-[72px] pt-3.5 pb-3 px-4 w-full font-bold text-md justify-center" type="button" aria-expanded="false">
                        <span>
                          <i class="currency-flag currency-flag-ngn hidden sm:inline-block"></i>NGN
                        </span>
                        <span class="inline-block rotate-180 static ml-3" aria-hidden="true" role="presentation">
                          <svg width="16" height="16" fill="currentColor" focusable="false">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hidden sm:flex min-h-[50px] mt-6">
              <div class="sm:w-1/2 text-center text-white relative min-h-[1px] after:content-[''] after:inline-block after:h-full after:bg-[#253655] after:absolute after:right-0 after:top-0 after:w-0.5">
                You could save vs banks<br><strong class="h4 text-white font-semibold text-base lg:text-md">43.95 GBP</strong>
              </div>
              <div class="sm:w-1/2 text-center text-white">
                Should arrive<br><strong class="h4 text-white font-semibold text-base lg:text-md">in 40 minutes</strong>
              </div>
            </div>
            <div class="flex mt-6">
              <div class="w-full">
                <a class="break-words pt-3 pb-2.5 px-6 whitespace-normal text-base min-h-[3rem] rounded-sm leading-[1.5rem] font-semibold text-center mb-0 w-full block text-white bg-[#2ed06e] border-[#2ed06e]" href="#" target="_top">Get started</a></div>
            </div>
          </div>
          <div class="lg:hidden text-center mt-6">
            <b class="hidden sm:block font-semibold">Also available on</b>
            <div class="md:grid md:grid-cols-2 md:gap-2 mt-2">
              <a href="https://apps.apple.com/app/id612261027" target="_blank" rel="noopener noreferrer">
                <img class="h-14 md:ml-auto mx-auto md:mr-0" src="https://wise.com/public-resources/assets/marketing-components/app-store-badges/en_us.svg" alt="Download from the Apple App Store">
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.transferwise.android" target="_blank" rel="noopener noreferrer">
                <img class="h-14 md:mr-auto md:ml-0 md:mt-0 mt-2 mx-auto" src="https://wise.com/public-resources/assets/marketing-components/google-play-store-badges/en_us.svg" alt="Download from the Google Play Store">
              </a>
            </div>
          </div>
          <div class="lg:hidden text-center mt-8">
            <div class="md:grid md:gap-4 md:grid-cols-2">
              <div class="text-center">
                <div class="h4 text-white mt-2">Over <!-- -->12<!-- --> million customers</div>
                <a target="_blank" rel="noopener noreferrer" class="text-accent font-semibold hidden md:block" href="#">Read on Trustpilot
                  <span class="inline-block rotate-90" role="presentation"
                    aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" focusable="false">
                      <path fill-rule="evenodd" d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div class="text-white">
                <div class="h4 mt-2 text-white">FCA regulated</div>
                <a target="_blank" rel="noopener noreferrer" class="text-accent font-semibold hidden md:block" href="/#">Learn more
                  <span class="inline-block rotate-90" role="presentation" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" focusable="false">
                      <path fill-rule="evenodd" d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path>
                    </svg>
                  </span>
                </a>
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
  name: 'Hero block',
}
</script>

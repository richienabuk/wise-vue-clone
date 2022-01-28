<template>
  <header class="absolute top-0 left-0 right-0 z-50 min-h-14 h-20 bg-[0 0]">
    <div class="container">
      <div class="h-20 lg:float-left">
        <button class="lg:hidden text-accent mr-1 text-accent h-full bg-transparent text-[32px] border-none px-2 collapsed float-left"
                aria-controls="navbar" aria-expanded="false" type="button">
          <div>
            <span class="sr-only">Toggle navigation</span>
            <span class="block w-[15px] h-0.5 bg-accent rounded-[1px]"></span>
            <span class="block w-[15px] h-0.5 bg-accent rounded-[1px] mt-1"></span>
            <span class="block w-[15px] h-0.5 bg-accent rounded-[1px] mt-1"></span>
          </div>
        </button>
        <div class="flex flex-col items-center justify-center h-full float-left">
          <a href="/" class="navbar-brand-logo lg:hidden xl:block">
          <img src="@/assets/logo.svg" alt="Wise">
          </a>
          <a href="/" class="navbar-fast-flag lg:block hidden xl:hidden">
            <img src="@/assets/brand_flag.svg" alt="Wise">
          </a>
        </div>
        <ul class="lg:hidden mt-3 mb-6 float-right">
          <li class="mt-[13px] mb-[11px]">
          <a href="#" class="max-w-[148px] min-h-8 rounded-[2px] text-tiny leading-6 pt-1 px-4 p-0.5 border text-accent bg-transparent border-accent font-semibold text-center inline-block transition ease-in-out delay-150" title="Register" target="_top">Register</a></li>
        </ul>
      </div>
      <nav class="hidden lg:block md:mx-0 md:px-0 collapse text-tiny">
        <div class="relative">
<!--          // drawer menu here-->
          <ul class="md:float-left ml-3 mt-3 pl-0 list-none mb-0">
            <li class="md:float-left relative my-3 block font-semibold block">
              <a href="#" class="md:text-accent text-white font-semibold px-2.5 leading-[24px] min-h-8 rounded-[2px]">Personal</a>
            </li>
            <li class="bg-[#a8afbb] w-px h-6 my-4 mx-1 my-3 float-left block"></li>
            <li class="md:float-left relative block my-3 font-semibold block">
              <a href="#" class="text-accent md:text-white font-semibold px-2.5 leading-[24px] min-h-8 rounded-[2px]">Business</a>
            </li>
          </ul>

          <div class="flex float-right">
            <ul class="float-none md:float-right my-3 list-none pl-[2.375rem]">
              <li class="relative block md:float-left">
                <button class="text-white flex items-center justify-between py-2 font-semibold px-2.5 h-14 w-full border-none text-left leading-[40px]" type="button">
                  <span class="inline-block max-w-[160px] text-ellipsis overflow-hidden">Money transfer</span>
                  <span class="inline-block rotate-90 text-white flex justify-center ml-1 items-center font-semibold" aria-hidden="true" role="presentation">
                    <svg width="16" height="16" fill="currentColor" focusable="false">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path>
                    </svg>
                  </span>
                </button>
              </li>
              <li class="relative block md:float-left">
                <button class="text-white flex items-center justify-between py-2 font-semibold px-2.5 h-14 w-full border-none text-left leading-[40px]" type="button">
                  <span class="inline-block max-w-[160px] text-ellipsis overflow-hidden text-left">Multi-currency account</span>
                  <span class="inline-block rotate-90 text-white flex justify-center ml-1 items-center font-semibold" aria-hidden="true" role="presentation">
                    <svg width="16" height="16" fill="currentColor" focusable="false">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path>
                    </svg>
                  </span>
                </button>
              </li>
              <li class="relative block md:float-left">
                <a href="/help/" class="text-white flex items-center justify-between py-2 font-semibold px-2.5 h-14 w-full border-none text-left leading-[40px]" target="_blank">
                  <span class="inline-block max-w-[160px] text-ellipsis overflow-hidden text-left">Help</span>
                  <span class="inline-block rotate-90 text-white flex justify-center ml-1 items-center font-semibold lg:hidden" aria-hidden="true" role="presentation">
                    <svg width="16" height="16" fill="currentColor" focusable="false">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li class="float-left relative block">
                <button class="text-white flex items-center justify-between py-2 font-semibold px-2.5 h-14 w-full border-none text-left leading-[40px]" type="button">
                  <span class="flex justify-center items-center mr-1" aria-hidden="true" role="presentation">
                    <svg width="16" height="16" fill="currentColor" focusable="false">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8A8 8 0 100 8a8 8 0 0016 0zm-11.483.8c.09 2.045.515 3.863 1.149 5.161A6.407 6.407 0 011.65 8.8h2.867zm1.602 0c.081 1.703.416 3.174.872 4.215.264.604.537.992.759 1.206.137.133.22.169.25.178.03-.01.113-.045.25-.178.222-.214.495-.602.76-1.206.455-1.041.79-2.512.871-4.215H6.12zm3.762-1.6H6.12c.081-1.703.416-3.174.872-4.216.264-.603.537-.99.759-1.205.137-.133.22-.169.25-.178.03.01.113.045.25.178.222.215.495.602.76 1.205.455 1.042.79 2.513.871 4.216zm1.602 1.6c-.089 2.045-.515 3.863-1.149 5.161A6.407 6.407 0 0014.351 8.8h-2.868zm2.868-1.6h-2.868c-.089-2.045-.515-3.863-1.149-5.16a6.407 6.407 0 014.017 5.16zm-9.834 0H1.65a6.407 6.407 0 014.016-5.16c-.634 1.297-1.06 3.115-1.149 5.16z"></path>
                    </svg>
                  </span>
                  <span class="inline-block max-w-[160px] text-ellipsis overflow-hidden text-left">EN</span>
                  <span class="inline-block rotate-90 text-white flex justify-center ml-1 items-center font-semibold" aria-hidden="true" role="presentation">
                    <svg width="16" height="16" fill="currentColor" focusable="false">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path>
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
            <ul class="mt-3 relative pb-3 float-none sm:mr-0 mb-0 pl-0 list-none">
              <li class="mt-3 float-left relative block mb-[11px] font-semibold">
                <a href="#" class="max-w-[164px] text-white px-2.5 pt-1 pb-0.5 rounded-[2px] block relative" title="Log in" target="_top">Log in</a>
              </li>
              <li class="float-left mt-3 block relative mb-[11px]">
                <a href="#" class="max-w-[164px] px-4 pt-1 ml-2.5 text-accent pb-0.5 rounded-[2px] border block relative border-accent bg-transparent text-center" title="Register" target="_top">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

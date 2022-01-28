<template>
  <header class="absolute top-0 left-0 right-0 z-50 min-h-14 h-20 bg-[0 0]">
    <div class="container">
      <div class="h-20">
        <button class="lg:hidden text-accent collapsed tw-public-navigation-menu__menu-toggle"
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
      <nav id="navbar" class="md:mx-0 md:px-0 collapse">
        <div class="relative">

        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {}
</script>

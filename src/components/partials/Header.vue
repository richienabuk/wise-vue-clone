<template>
  <header
      class="navbar absolute navbar-static-top navbar--redesign navbar--wise navbar--redesign-en_US navbar--inverse publicNavigation"
      data-tracking-id="public-navigation">
    <div class="container">
      <div class="tw-public-navigation-menu__header pull-lg-left">
        <button class="tw-public-navigation-menu__menu-toggle visible-md visible-xs visible-sm collapsed"
                aria-controls="navbar" aria-expanded="false" type="button">
          <div><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span
              class="icon-bar"></span><span class="icon-bar"></span></div>
        </button>
        <div class="pull-xs-left tw-public-navigation__logo  "><a href="/" class="navbar-brand-logo hidden-lg"><img
            src="https://wise.com/public-resources/assets/logos/wise/brand_logo_inverse.svg" alt="Wise"></a><a href="/"
                                                                                                               class="navbar-fast-flag visible-lg"><img
            src="https://wise.com/public-resources/assets/logos/wise/brand_flag.svg" alt="Wise"></a></div>
        <ul class="pull-right visible-md visible-xs visible-sm tw-public-navigation-menu__buttons">
          <li class="navbar-btn"><a
              href="/register?redirectUrl=%2Fsend%23%3Famount%3D1000%26sourceCurrency%3DGBP%26targetCurrency%3DNGN%26fixedTarget%3Dfalse%26guaranteedFixedTarget%3Dfalse%26paymentOptionType%3DREGULAR&amp;country=NG"
              class="btn text-ellipsis btn-default" title="Register" target="_top">Register</a></li>
        </ul>
      </div>
      <nav id="navbar" class="tw-public-navigation-menu navbar-collapse navbar-collapse-with-panel collapse">
        <div class="tw-public-navigation-menu__sidebar navbar-collapse-panel">
          <div class="tw-public-navigation-menu__header pull-lg-left">
            <button
                class="tw-public-navigation-menu__menu-toggle visible-md visible-xs visible-sm pull-xs-right sidebar-closeBtn collapsed"
                aria-controls="navbar" aria-expanded="false" type="button"><span class="tw-icon tw-icon-cross "
                                                                                 aria-hidden="true" role="presentation"><svg
                width="24" height="24" fill="currentColor" focusable="false"><path
                d="M12 13.414l7.293 7.293 1.414-1.414L13.414 12l7.293-7.293-1.414-1.414L12 10.586 4.707 3.293 3.293 4.707 10.586 12l-7.293 7.293 1.414 1.414L12 13.414z"></path></svg></span>
            </button>
            <div class="pull-xs-left tw-public-navigation__logo  hidden-lg hidden-xl"><a href="/"
                                                                                         class="navbar-brand-logo hidden-lg"><img
                src="https://wise.com/public-resources/assets/logos/wise/brand_logo_inverse.svg" alt="Wise"></a><a
                href="/" class="navbar-fast-flag visible-lg"><img
                src="https://wise.com/public-resources/assets/logos/wise/brand_flag.svg" alt="Wise"></a></div>
          </div>
          <ul class="nav navbar-nav navbar-nav--tabs">
            <li class="navbar-btn"><a href="/" class="btn text-ellipsis btn-active btn-link btn-tab" title="Personal">Personal</a>
            </li>
            <li class="navbar-btn navbar-btn--divider" aria-hidden="true">&nbsp;</li>
            <li class="navbar-btn"><a href="/gb/business/" class="btn text-ellipsis btn-link btn-tab" title="Business">Business</a>
            </li>
          </ul>
          <div class="navbar-item-wrapper">
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown" tabindex="-1">
                <button class="dropdown-toggle tw-link-with-chevron" type="button"><span
                    class="tw-public-navigation-item-content__text text-ellipsis">Money transfer</span><span
                    class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon" aria-hidden="true"
                    role="presentation"><svg width="16" height="16" fill="currentColor" focusable="false"><path
                    fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></button>
                <ul class="dropdown-menu tw-public-navigation-menu__dropdown-menu ">
                  <li class="dropdown-cta"><a href="/gb/send-money/" class="callout-container dropdown-content"><img
                      class="m-b-3  visible-lg visible-xl"
                      src="https://daw291njkc3ao.cloudfront.net/conversion/navigation/send-money.svg" alt=""><strong
                      class="tw-link-with-chevron ">Send money<span
                      class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon hidden" aria-hidden="true"
                      role="presentation"><svg width="16" height="16" fill="currentColor" focusable="false"><path
                      fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></strong>
                    <p class="m-t-1 m-b-0 visible-lg visible-xl">Make a one-off payment. You'll get the real exchange
                      rate with the low fee we're known for.</p></a></li>
                  <li class=""><a href="/large-amounts/" class="callout-container dropdown-content"><strong
                      class="tw-link-with-chevron ">Send large amounts<span
                      class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon hidden" aria-hidden="true"
                      role="presentation"><svg width="16" height="16" fill="currentColor" focusable="false"><path
                      fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></strong></a>
                  </li>
                  <li class=""><a href="/au/students" class="callout-container dropdown-content"><strong
                      class="tw-link-with-chevron ">Send money for students<span
                      class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon hidden" aria-hidden="true"
                      role="presentation"><svg width="16" height="16" fill="currentColor" focusable="false"><path
                      fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></strong></a>
                  </li>
                  <li class=""><a href="/gb/about/our-story" class="callout-container dropdown-content"><strong
                      class="tw-link-with-chevron ">About Wise<span
                      class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon hidden" aria-hidden="true"
                      role="presentation"><svg width="16" height="16" fill="currentColor" focusable="false"><path
                      fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></strong></a>
                  </li>
                </ul>
              </li>
              <li class="dropdown" tabindex="-1" data-analytics-id="receive">
                <button class="dropdown-toggle tw-link-with-chevron" type="button"><span
                    class="tw-public-navigation-item-content__text text-ellipsis">Multi-currency account</span><span
                    class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon" aria-hidden="true"
                    role="presentation"><svg width="16" height="16" fill="currentColor" focusable="false"><path
                    fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></button>
                <ul class="dropdown-menu tw-public-navigation-menu__dropdown-menu ">
                  <li class="dropdown-cta"><a href="/gb/multi-currency-account/"
                                              class="callout-container dropdown-content"><img
                      class="m-b-3 mca visible-lg visible-xl"
                      src="https://wise.com/public-resources/assets/public-navigation/multi_currency_account_v2.svg"
                      alt=""><strong class="tw-link-with-chevron ">Multi-currency account<span
                      class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon hidden" aria-hidden="true"
                      role="presentation"><svg width="16" height="16" fill="currentColor" focusable="false"><path
                      fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></strong>
                    <p class="m-t-1 m-b-0 visible-lg visible-xl">Manage your money across 50+ currencies. Send at the
                      real exchange rate, and spend with a Wise debit card.</p></a></li>
                  <li class=""><a href="/gb/multi-currency-account/#features"
                                  class="callout-container dropdown-content"><strong class="tw-link-with-chevron ">Product
                    features<span class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon hidden"
                                  aria-hidden="true" role="presentation"><svg width="16" height="16" fill="currentColor"
                                                                              focusable="false"><path
                        fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></strong></a>
                  </li>
                  <li class=""><a href="/gb/multi-currency-account/pricing"
                                  class="callout-container dropdown-content"><strong class="tw-link-with-chevron ">Pricing<span
                      class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon hidden" aria-hidden="true"
                      role="presentation"><svg width="16" height="16" fill="currentColor" focusable="false"><path
                      fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></strong></a>
                  </li>
                  <li class=""><a href="/gb/multi-currency-account/#use-case"
                                  class="callout-container dropdown-content"><strong class="tw-link-with-chevron ">Use
                    cases<span class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon hidden" aria-hidden="true"
                               role="presentation"><svg width="16" height="16" fill="currentColor" focusable="false"><path
                        fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></strong></a>
                  </li>
                  <li class=""><a href="/gb/multi-currency-account/#getting-started"
                                  class="callout-container dropdown-content"><strong class="tw-link-with-chevron ">Getting
                    started<span class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon hidden"
                                 aria-hidden="true" role="presentation"><svg width="16" height="16" fill="currentColor"
                                                                             focusable="false"><path fill-rule="evenodd"
                                                                                                     clip-rule="evenodd"
                                                                                                     d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></strong></a>
                  </li>
                  <li class=""><a href="/gb/multi-currency-account/#protecting-your-money"
                                  class="callout-container dropdown-content"><strong class="tw-link-with-chevron ">Protecting
                    your money<span class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon hidden"
                                    aria-hidden="true" role="presentation"><svg width="16" height="16"
                                                                                fill="currentColor" focusable="false"><path
                        fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></strong></a>
                  </li>
                  <li class=""><a href="/gb/multi-currency-account/#coverage"
                                  class="callout-container dropdown-content"><strong class="tw-link-with-chevron ">Coverage<span
                      class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon hidden" aria-hidden="true"
                      role="presentation"><svg width="16" height="16" fill="currentColor" focusable="false"><path
                      fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></strong></a>
                  </li>
                </ul>
              </li>
              <li class="tw-public-navigation-menu__help" tabindex="-1"><a href="/help/" class="tw-link-with-chevron"
                                                                           target="_blank"><span
                  class="tw-public-navigation-item-content__text text-ellipsis">Help</span><span
                  class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon visible-xs-inline-block visible-sm-inline-block visible-md-inline-block"
                  aria-hidden="true" role="presentation"><svg width="16" height="16" fill="currentColor"
                                                              focusable="false"><path fill-rule="evenodd"
                                                                                      clip-rule="evenodd"
                                                                                      d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></a>
              </li>
              <li class="dropdown tw-public-navigation-menu__language-selector" tabindex="-1">
                <button class="dropdown-toggle tw-link-with-chevron" type="button"><span
                    class="tw-icon tw-icon-globe tw-public-navigation-item-content__icon" aria-hidden="true"
                    role="presentation"><svg width="16" height="16" fill="currentColor" focusable="false"><path
                    fill-rule="evenodd" clip-rule="evenodd"
                    d="M16 8A8 8 0 100 8a8 8 0 0016 0zm-11.483.8c.09 2.045.515 3.863 1.149 5.161A6.407 6.407 0 011.65 8.8h2.867zm1.602 0c.081 1.703.416 3.174.872 4.215.264.604.537.992.759 1.206.137.133.22.169.25.178.03-.01.113-.045.25-.178.222-.214.495-.602.76-1.206.455-1.041.79-2.512.871-4.215H6.12zm3.762-1.6H6.12c.081-1.703.416-3.174.872-4.216.264-.603.537-.99.759-1.205.137-.133.22-.169.25-.178.03.01.113.045.25.178.222.215.495.602.76 1.205.455 1.042.79 2.513.871 4.216zm1.602 1.6c-.089 2.045-.515 3.863-1.149 5.161A6.407 6.407 0 0014.351 8.8h-2.868zm2.868-1.6h-2.868c-.089-2.045-.515-3.863-1.149-5.16a6.407 6.407 0 014.017 5.16zm-9.834 0H1.65a6.407 6.407 0 014.016-5.16c-.634 1.297-1.06 3.115-1.149 5.16z"></path></svg></span><span
                    class="tw-public-navigation-item-content__text text-ellipsis">EN</span><span
                    class="tw-icon tw-icon-chevron-right tw-link-with-chevron-icon" aria-hidden="true"
                    role="presentation"><svg width="16" height="16" fill="currentColor" focusable="false"><path
                    fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z"></path></svg></span></button>
                <ul class="dropdown-menu tw-public-navigation-menu__dropdown-menu tw-public-navigation-menu__language-dropdown">
                  <li class="dropdown-cta hidden-xs hidden-sm hidden-md"><span class="h2 dropdown-content"><span
                      class="language-dropdown-title colored-dot">Hallo Welt</span><span
                      class="language-dropdown-title colored-dot">Hello world</span><span
                      class="language-dropdown-title colored-dot active">Hello world</span><span
                      class="language-dropdown-title colored-dot">Hola mundo</span><span
                      class="language-dropdown-title colored-dot">Bonjour le monde</span><span
                      class="language-dropdown-title colored-dot">Ciao mondo</span><span
                      class="language-dropdown-title colored-dot">Halo dunia</span><span
                      class="language-dropdown-title colored-dot">Helló Világ</span><span
                      class="language-dropdown-title colored-dot">Witaj, świecie</span><span
                      class="language-dropdown-title colored-dot">Olá, Mundo</span><span
                      class="language-dropdown-title colored-dot">Salut lume</span><span
                      class="language-dropdown-title colored-dot">Merhaba Dünya</span><span
                      class="language-dropdown-title colored-dot">Здравствуй, мир</span><span
                      class="language-dropdown-title colored-dot">世界とつながろう</span><span
                      class="language-dropdown-title colored-dot">你好 世界</span><span
                      class="language-dropdown-title colored-dot">Привіт, світ</span></span></li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong class="">Deutsch</strong>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong class="">English
                      (UK)</strong></button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong
                        class="text-info">English (US)</strong><span
                        class="tw-icon tw-icon-check text-info pull-xs-right pull-md-none" aria-hidden="true"
                        role="presentation"><svg width="16" height="16" fill="currentColor" focusable="false"><path
                        fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 8.571L1.122 7.44l3.902 3.934 9.854-9.934L16 2.571 5.024 13.637 0 8.571z"></path></svg></span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong class="">Español</strong>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong class="">Français</strong>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong class="">Italiano</strong>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong class="">Bahasa
                      Indonesia</strong></button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong
                        class="">Magyar</strong></button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong
                        class="">Polski</strong></button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong class="">Português</strong>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong
                        class="">Română</strong></button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong
                        class="">Türkçe</strong></button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong class="">Русский</strong>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong
                        class="">日本語</strong></button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong class="">繁體中文
                      (香港)</strong></button>
                  </li>
                  <li>
                    <button type="button" class="btn dropdown-content d-flex align-items-center"><strong class="">Українська</strong>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right button-items-nav-wrapper">
              <li class="navbar-btn"><a href="/login/" class="btn text-ellipsis btn-link" title="Log in" target="_top">Log
                in</a></li>
              <li class="navbar-btn"><a
                  href="/register?redirectUrl=%2Fsend%23%3Famount%3D1000%26sourceCurrency%3DGBP%26targetCurrency%3DNGN%26fixedTarget%3Dfalse%26guaranteedFixedTarget%3Dfalse%26paymentOptionType%3DREGULAR&amp;country=NG"
                  class="btn text-ellipsis btn-default" title="Register" target="_top">Register</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>
<template>
  <div class="heroWithCalculator bg-primary" id="hero">
    <div class="container">
      <div class="row row-equal-height">
        <div
            class="heroWithCalculator-left text-xs-center text-lg-left col-xs-12 col-sm-10 col-sm-push-1 col-lg-push-0 col-lg-6">
          <div class="moneyTransferHero-title"><h1 class="m-b-2"><span>The cheap, fast way to send money abroad.</span>
          </h1>
            <div class="moneyTransferHero-videoCta">
              <div class="moneyTransferHero-videoCta__playBtn playButton playButton--pulsing">
                <button type="button" aria-label="Play video" aria-expanded="false" class="playButton__button">
                  <svg viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="54.5" cy="54.5" r="53" fill="currentColor"></circle>
                    <path d="M72 54.6162L45.5758 69.8722L45.5758 39.3601L72 54.6162Z" fill="white"></path>
                  </svg>
                </button>
              </div>
              <button type="button"
                      class="btn btn-md np-btn np-btn-md btn-accent btn-priority-3 moneyTransferHero-videoCta__textBtn hidden-xs hidden-sm hidden-md"
                      aria-label="Play video" aria-expanded="false">See how it works
              </button>
            </div>
          </div>
          <div class="moneyTransferHero-trustelements hidden-xs hidden-sm hidden-md">
            <div class="unifiedTrustElements">
              <div class="tw-trust-element callout-container text-center tw-trust-element-animate"
                   data-testid="trust-element-container">
                <div class="h4 m-t-1">Over <!-- -->12<!-- --> million customers</div>
                <a target="_blank" rel="noopener noreferrer" class="tw-link-with-chevron"
                   href="https://www.trustpilot.com/review/wise.com">Read on Trustpilot<span
                    class="tw-icon tw-icon-chevron tw-chevron chevron-color right" role="presentation"
                    aria-hidden="true"><svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"
                                            focusable="false"><path fill-rule="evenodd"
                                                                    d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path></svg></span></a>
              </div>
              <div class="tw-trust-element callout-container text-center" data-testid="trust-element-container">
                <div class="h4 m-t-1">FCA regulated</div>
                <a target="_blank" rel="noopener noreferrer" class="tw-link-with-chevron"
                   href="/help/articles/2932693/how-is-wise-regulated-in-each-country">Learn more<span
                    class="tw-icon tw-icon-chevron tw-chevron chevron-color right" role="presentation"
                    aria-hidden="true"><svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"
                                            focusable="false"><path fill-rule="evenodd"
                                                                    d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path></svg></span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="heroWithCalculator-right col-xs-12 col-sm-10 col-sm-push-1 col-lg-push-1 col-lg-5">
          <div>
            <div data-tracking-id="calculator" class="" data-gtm-vis-first-on-screen-881521_1494="158424"
                 data-gtm-vis-total-visible-time-881521_1494="100" data-gtm-vis-has-fired-881521_1494="1">
              <div class="money-input-form-group form-group form-group-lg m-b-0"><label class="control-label"
                                                                                        for="tw-calculator-source">You
                send</label>
                <div class="tw-money-input input-group input-group-lg"><input type="text" id="tw-calculator-source"
                                                                              value="1,000" inputmode="decimal"
                                                                              class="form-control" placeholder=""
                                                                              autocomplete="off">
                  <div class="input-group-btn amount-currency-select-btn">
                    <div class="tw-select btn-group btn-block dropdown">
                      <button class="btn btn-input btn-input-inverse btn-addon btn-lg dropdown-toggle" type="button"
                              aria-expanded="false"><span><i
                          class="currency-flag currency-flag-gbp hidden-xs"></i>GBP</span><span
                          class="tw-icon tw-icon-chevron-up tw-chevron chevron-color bottom tw-icon tw-chevron-up-icon tw-chevron bottom tw-select-chevron"
                          aria-hidden="true" role="presentation"><svg width="16" height="16" fill="currentColor"
                                                                      focusable="false"><path fill-rule="evenodd"
                                                                                              clip-rule="evenodd"
                                                                                              d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"></path></svg></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="sequence sequence-top sequence-bottom tw-calculator-breakdown tw-calculator-breakdown--detailed sequence-inverse tw-calculator-breakdown--inverse">
                <li><span class="sequence-icon tw-calculator-breakdown__icon">–</span><span
                    class="tw-calculator-breakdown-item__left"><strong
                    data-testid="tw-money-wrapper-bold">5.53 GBP</strong></span><span
                    class="tw-calculator-breakdown-item__right"><span class="m-r-1"
                                                                      data-tracking-id="calculator-payment-select"
                                                                      data-gtm-vis-first-on-screen-881521_1494="158571"
                                                                      data-gtm-vis-total-visible-time-881521_1494="100"
                                                                      data-gtm-vis-has-fired-881521_1494="1"><div
                    class="tw-select btn-group dropdown"><button
                    class="btn btn-input btn-input-inverse btn-addon btn-sm dropdown-toggle" type="button"
                    aria-expanded="false"><span>Low cost transfer</span><span
                    class="tw-icon tw-icon-chevron-up tw-chevron chevron-color bottom tw-icon tw-chevron-up-icon tw-chevron bottom tw-select-chevron"
                    aria-hidden="true" role="presentation"><svg width="16" height="16" fill="currentColor"
                                                                focusable="false"><path fill-rule="evenodd"
                                                                                        clip-rule="evenodd"
                                                                                        d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"></path></svg></span></button></div></span><span
                    style="text-transform:none">fee</span></span></li>
                <li><span class="sequence-icon tw-calculator-breakdown__icon">=</span><span
                    class="tw-calculator-breakdown-item__left">994.47 GBP</span><span
                    class="tw-calculator-breakdown-item__right">Amount we’ll convert</span></li>
                <li><span class="sequence-icon tw-calculator-breakdown__icon">×</span><span
                    class="tw-calculator-breakdown-item__left"><a role="button" tabindex="0"><span
                    class="tw-calculator-breakdown-rate__value">522.093</span><span
                    class="tw-calculator-breakdown-rate-graph-icon"><svg viewBox="0 0 11 8" version="1.1"
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         id="el_m5vu-971w"><defs><linearGradient
                    x1="-12.7227783%" y1="100%" x2="125.65918%" y2="100%" id="linearGradient-1"><stop
                    stop-color="#00B9FE" offset="0%"></stop><stop stop-color="#2ED06F"
                                                                  offset="100%"></stop></linearGradient></defs><g
                    id="el_sQvX_qcVwL" fill-rule="evenodd"><g id="el_s1n2A-3zGx"><path
                    d="M6.12919677,0 C6.00679983,0 5.96090098,0.137696558 6.03739907,0.229494263 L7.16957076,1.36166596 L8.63833404,2.83042924 L9.77050574,3.96260093 C9.84700382,4.03909902 10,3.99320017 10,3.87080323 L10,0.137696558 C10,0.06119847 9.93880153,0 9.86230344,0 L6.12919677,0 Z"
                    id="el_dre9buCDMS"></path><polyline id="el_lemhJ3vI1C" points="0 6 3 3 5 5 8 2"></polyline></g></g></svg></span></a></span><span
                    class="tw-calculator-breakdown-item__right"><span class="np-popover"><span class="d-inline-block"><button
                    type="button" class="btn-unstyled" data-toggle="popover"><span
                    data-tracking-id="calculator-fixed-rate-tooltip" data-gtm-vis-first-on-screen-881521_1494="158379"
                    data-gtm-vis-total-visible-time-881521_1494="100" data-gtm-vis-has-fired-881521_1494="1">Guaranteed rate</span></button></span></span> <span
                    style="white-space:nowrap">(13 hrs)</span></span></li>
              </ul>
              <div class="money-input-form-group form-group form-group-lg m-b-0"><label class="control-label"
                                                                                        for="tw-calculator-target">Recipient
                <!-- --> gets<!-- --> </label>
                <div class="tw-money-input input-group input-group-lg"><input type="text" id="tw-calculator-target"
                                                                              value="519,205.83" inputmode="decimal"
                                                                              class="form-control" placeholder=""
                                                                              autocomplete="off"><span
                    class="input-group-addon input-lg"><span class="tw-tooltip-container" aria-describedby="uf1has"><div
                    class="tooltip fade top " role="tooltip" id="uf1has" style="top: -104px; left: 170px;"><div
                    class="tooltip-arrow"></div><div class="tooltip-inner">If you need more than 13 hours to pay, click the lock to make sure your recipient gets exactly
                  <!-- -->519,205.83 NGN<!-- -->.</div></div><a class="tw-calculator__amount-lock text-muted"><span
                    class="tw-icon tw-icon-unlock " aria-hidden="true" role="presentation"><svg width="16" height="16"
                                                                                                fill="currentColor"
                                                                                                focusable="false"><path
                    d="M7.2 12v-2h1.6v2H7.2z"></path><path fill-rule="evenodd" clip-rule="evenodd"
                                                           d="M3.2 6.2V5C3.2 2.625 4.994.2 8 .2c2.496 0 4.157 1.673 4.648 3.6h-1.673c-.436-1.122-1.486-2-2.975-2-1.994 0-3.2 1.575-3.2 3.2v1.2h10V13a2.8 2.8 0 01-2.8 2.8H4A2.8 2.8 0 011.2 13V6.2h2zM2.8 13V7.8h10.4V13a1.2 1.2 0 01-1.2 1.2H4A1.2 1.2 0 012.8 13z"></path></svg></span></a></span></span>
                  <div class="input-group-btn amount-currency-select-btn">
                    <div class="tw-select btn-group btn-block dropdown">
                      <button class="btn btn-input btn-input-inverse btn-addon btn-lg dropdown-toggle" type="button"
                              aria-expanded="false"><span><i
                          class="currency-flag currency-flag-ngn hidden-xs"></i>NGN</span><span
                          class="tw-icon tw-icon-chevron-up tw-chevron chevron-color bottom tw-icon tw-chevron-up-icon tw-chevron bottom tw-select-chevron"
                          aria-hidden="true" role="presentation"><svg width="16" height="16" fill="currentColor"
                                                                      focusable="false"><path fill-rule="evenodd"
                                                                                              clip-rule="evenodd"
                                                                                              d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"></path></svg></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden-xs row extraInformation__info extraInformation__infoWrapper-enter-done"
                 data-testid="info-visible">
              <div class="col-xs-6 text-xs-center extraInformation__infoChild" data-testid="savings">You could save vs
                banks<br><strong class="h4">43.95 GBP</strong></div>
              <div class="col-xs-6 text-xs-center extraInformation__infoChild" data-testid="delivery-estimate">Should
                arrive<br><strong class="h4">in 40 minutes</strong></div>
            </div>
            <div class="row m-t-3 tw-calculator-actions">
              <div class="col-xs-12"><a class="btn btn-success btn-block"
                                        href="/register?redirectUrl=%2Fsend%23%3Famount%3D1000%26sourceCurrency%3DGBP%26targetCurrency%3DNGN%26fixedTarget%3Dfalse%26guaranteedFixedTarget%3Dfalse%26paymentOptionType%3DREGULAR&amp;country=NG"
                                        target="_top">Get started</a></div>
            </div>
          </div>
          <div class="hidden-lg hidden-xl text-xs-center m-t-3"><b class="storeBadges-title">Also available on</b>
            <div class="storeBadges-links"><a href="https://apps.apple.com/app/id612261027" target="_blank"
                                              rel="noopener noreferrer"><img class="tw-app-store-badge__image"
                                                                             src="https://wise.com/public-resources/assets/marketing-components/app-store-badges/en_us.svg"
                                                                             alt="Download from the Apple App Store"></a><a
                href="https://play.google.com/store/apps/details?id=com.transferwise.android" target="_blank"
                rel="noopener noreferrer"><img class="tw-google-play-store-badge__image"
                                               src="https://wise.com/public-resources/assets/marketing-components/google-play-store-badges/en_us.svg"
                                               alt="Download from the Google Play Store"></a></div>
          </div>
          <div class="hidden-lg hidden-xl text-xs-center m-t-4">
            <div class="unifiedTrustElements">
              <div class="tw-trust-element callout-container text-center" data-testid="trust-element-container">
                <div class="h4 m-t-1">Over <!-- -->12<!-- --> million customers</div>
                <a target="_blank" rel="noopener noreferrer" class="tw-link-with-chevron"
                   href="https://www.trustpilot.com/review/wise.com">Read on Trustpilot<span
                    class="tw-icon tw-icon-chevron tw-chevron chevron-color right" role="presentation"
                    aria-hidden="true"><svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"
                                            focusable="false"><path fill-rule="evenodd"
                                                                    d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path></svg></span></a>
              </div>
              <div class="tw-trust-element callout-container text-center" data-testid="trust-element-container">
                <div class="h4 m-t-1">FCA regulated</div>
                <a target="_blank" rel="noopener noreferrer" class="tw-link-with-chevron"
                   href="/help/articles/2932693/how-is-wise-regulated-in-each-country">Learn more<span
                    class="tw-icon tw-icon-chevron tw-chevron chevron-color right" role="presentation"
                    aria-hidden="true"><svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"
                                            focusable="false"><path fill-rule="evenodd"
                                                                    d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"></path></svg></span></a>
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
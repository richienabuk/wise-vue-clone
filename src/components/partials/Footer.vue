<template>
  <footer class="footer lg:py-40 sm:py-28 py-16 bg-primary">
    <div class="container">
      <a class="flex justify-center mb-8 md:hidden" href="/"><img
        :src="Logo" alt="Wise"></a>
      <div class="flex flex-wrap w-full text-tiny text-neutral">
        <div class="w-full md:w-1/4 md:text-left text-center"><h5 class="footer-title m-b-2">Company and team</h5>
          <ul class="list-none ml-0 pb-9">
            <li class=""><a class="footer-link" href="#">Company and team</a></li>
            <li class=""><a class="footer-link" href="#">News and blog</a></li>
            <li class=""><a class="footer-link" href="#">Press</a></li>
            <li class=""><a class="footer-link" href="#">Careers</a></li>
            <li class=""><a class="footer-link" href="#">Affiliates and partnerships</a></li>
            <li class=""><a class="footer-link" href="#">Modern slavery statement</a></li>
            <li class=""><a class="footer-link" href="#">Wise Business</a></li>
            <li class=""><a class="footer-link" href="#">Investor relations</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 md:text-left text-center"><h5 class="footer-title m-b-2">Help and support</h5>
          <ul class="list-none ml-0 pb-9">
            <li class=""><a class="footer-link" href="#">Help centre</a></li>
            <li class=""><a class="footer-link" href="#">Mid-market rate</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 md:text-left text-center"><h5 class="footer-title m-b-2">Learn more</h5>
          <ul class="list-none ml-0 pb-9">
            <li class=""><a class="footer-link" href="#">International money transfers</a></li>
            <li class=""><a class="footer-link" href="#">Swift/BIC codes</a></li>
            <li class=""><a class="footer-link" href="#">Currency converter</a></li>
            <li class=""><a class="footer-link" href="#">IBAN codes</a></li>
            <li class=""><a class="footer-link" href="#">Rate alerts</a></li>
            <li class=""><a class="footer-link" href="#">Compare exchange rates</a></li>
            <li class=""><a class="footer-link" href="#">Security</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 md:text-left text-center"><h5 class="footer-title m-b-2">Follow us</h5>
          <ul class="list-none ml-0 pb-9">
            <li class="footer-icon-links flex justify-center md:justify-start">
              <a href="https://www.facebook.com/wise" class="mr-4" target="_blank" rel="noopener noreferrer">
                <span class="hover:text-secondary" aria-hidden="true" role="presentation">
                <svg width="24" height="24" fill="currentColor" focusable="false">
                <path d="M13.77 22v-9.161h3.074l.12-.894.111-.894.11-.894.121-.894H13.77v-2.28c-.004-.236.02-.472.07-.703.042-.203.132-.392.262-.553.14-.165.325-.286.532-.351.291-.097.597-.142.904-.13h1.889V2.05h-.382L16.422 2h-1.748a5.283 5.283 0 00-1.868.311 3.847 3.847 0 00-1.446.904c-.42.417-.742.92-.945 1.477a5.725 5.725 0 00-.331 2.009v2.561H7v3.576h3.084V22h3.686z"></path>
                </svg>
                </span>
              </a>
              <a href="https://twitter.com/wise" class="mr-4" target="_blank" rel="noopener noreferrer">
              <span class="hover:text-secondary" aria-hidden="true" role="presentation">
              <svg width="24" height="24" fill="currentColor" focusable="false">
              <path d="M22 5.933a8.182 8.182 0 01-2.355.645 4.109 4.109 0 001.819-2.272 8.345 8.345 0 01-2.6 1 4.1 4.1 0 00-7.1 2.8c.002.305.035.61.1.909a11.655 11.655 0 01-8.455-4.282 4.045 4.045 0 00-.554 2.063 4.1 4.1 0 001.818 3.41 4.046 4.046 0 01-1.864-.51v.073a4.109 4.109 0 003.282 4.027c-.35.099-.71.15-1.073.155a4.21 4.21 0 01-.773-.073 4.09 4.09 0 003.828 2.8 8.181 8.181 0 01-5.091 1.818A8.651 8.651 0 012 18.415a11.628 11.628 0 006.29 1.818A11.6 11.6 0 0019.965 8.587v-.536A8.39 8.39 0 0022 5.933z"></path>
            </svg>
            </span>
            </a>
              <a href="https://www.instagram.com/wiseaccount" target="_blank" rel="noopener noreferrer">
              <span class="hover:text-secondary" aria-hidden="true"
                    role="presentation"><svg width="24" height="24" fill="currentColor" focusable="false">
                <path d="M12 3.833H8c-1 .084-1.583.25-1.917.334-.416.25-.75.416-1.166.75-.334.333-.584.666-.75 1.166-.084.334-.25.917-.25 1.917-.084 1-.084 1.333-.084 4s0 2.917.084 4c0 .917.166 1.5.333 1.833.167.5.417.834.75 1.167.333.333.667.583 1.167.75.333.167.833.25 1.833.333 1 .084 1.333.084 4 .084s2.917 0 4-.084c.917 0 1.5-.166 1.833-.333.5-.167.834-.417 1.167-.75.333-.333.583-.667.75-1.167.167-.333.25-.833.333-1.833.084-1 .084-1.333.084-4s0-2.917-.084-4c0-.917-.166-1.5-.333-1.833-.167-.5-.417-.834-.75-1.167-.333-.333-.667-.583-1.167-.75C17.5 4.083 17 4 16 3.917c-1-.084-1.333-.084-4-.084zM12 2h4.167c1.083.083 1.75.25 2.416.5.667.25 1.167.583 1.75 1.167.584.583.917 1.166 1.084 1.833.25.667.416 1.333.5 2.417C22 8.917 22 9.25 22 12s0 3.083-.083 4.083c-.084 1.084-.25 1.75-.5 2.417-.25.667-.584 1.167-1.167 1.75-.5.583-1.083.917-1.75 1.167s-1.333.416-2.417.5C15.083 22 14.75 22 12 22H7.833c-1.083-.083-1.75-.25-2.416-.5-.667-.25-1.167-.583-1.75-1.167-.584-.583-.917-1.166-1.084-1.833-.25-.667-.416-1.333-.5-2.417C2 15.083 2 14.75 2 12s0-3.083.083-4.083c0-1.084.167-1.834.417-2.5a5.346 5.346 0 011.167-1.75A5.346 5.346 0 015.417 2.5c.666-.25 1.416-.417 2.5-.417C8.917 2 9.25 2 12 2zm0 4.833c2.833 0 5.167 2.334 5.167 5.167 0 2.833-2.334 5.167-5.167 5.167-2.833 0-5.167-2.334-5.167-5.167 0-2.833 2.334-5.167 5.167-5.167zm0 8.5c1.833 0 3.333-1.5 3.333-3.333 0-1.833-1.5-3.333-3.333-3.333A3.343 3.343 0 008.667 12c0 1.833 1.5 3.333 3.333 3.333zm5.333-7.5a1.167 1.167 0 110-2.333 1.167 1.167 0 010 2.333z"></path>
              </svg>
              </span>
            </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="lg:mb-8 sm:mb-6 mb-4 border border-solid border-[#e2e6e8] opacity-10">
      <div class="flex flex-wrap w-full mb-10 text-tiny text-neutral">
        <div class="w-full md:w-1/4 text-center md:text-left footer-title">
          <a class="hidden md:block" href="/" data-testid="footer-logo">
            <img :src="Logo" alt="Wise">
          </a>
        </div>
        <div class="w-full md:w-3/4 flex flex-wrap">
          <div class="w-full sm:w-1/2 md:w-1/3 text-center md:text-left footer-title">
            <a class="footer-link" href="#">Legal</a>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 text-center md:text-left footer-title">
            <a class="footer-link" href="#">Privacy policy</a>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 text-center md:text-left footer-title">
            <a class="footer-link" href="#">Cookie Policy</a>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 text-center md:text-left footer-title">
            <a class="footer-link" href="#">Country site map</a>
          </div>
        </div>
      </div>
      <div class="row text-center mt-10">
        <div class="w-full md:w-8/12 mx-auto">
          <p class="text-xs leading-loose text-white pb-6"><span>© Wise Payments Limited </span>2022</p>
          <p class="text-xs leading-loose text-white pb-6">
            <span>Wise is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011, Firm Reference
              <a class="footer-link" href="#" target="_blank" rel="noopener noreferrer">
                900507
              </a>, for the issuing of electronic money.</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "@/assets/logo.svg"
export default {
  data: function () {
    return {
      Logo
    }
  }
}
</script>

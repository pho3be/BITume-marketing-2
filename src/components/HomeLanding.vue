<template>
  <main class="index home">
    <div class="w-100 position-relative">
      <section class="py-m fs-data-platform cool-background">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <h1 class="mb-2 text-capitalize btm-primary-heading font-weight-bold">
                Lead the road <br>for your data !
              </h1>
              <div class="btm-primary-description">
                <p>
                  BITume make you able to both process and connect your data with many providers, <b>opening way for Data-Oriented Business Intelligence.</b>
                  Set it up in less than 20 minutes, and start gaining more efficiency !
                </p>
              </div>

              <a href="/request-trial" class="btn btn-primary btn-main-cta btn-large box-shadow-primary font-weight-bold mt-2 mr-3 mb-2 mb-sm-0">
                Free Trial
              </a>

              <a href="#" class="btn btn-outline-secondary btn-main-cta btn-large font-weight-bold mt-2 mr-3 mb-2 mb-sm-0">
                Learn more
              </a>

              <p class="mt-3 text-muted font-size-small">Enterprise-Edition 30-days Trial. No credit card required.</p>
            </div>

            <div class="col-lg-7 btm-right-container d-flex align-items-center position-relative">

            </div>

          </div>
        </div>
      </section>

      <section class="py-l general position-relative">
        <div class="cool position-absolute">
          <img src="/assets/landing/res/cool-top.svg"/>
        </div>
        <div class="container">
          <h2 class="font-size-xl text-center txt-primary-heading font-weight-bold mb-12"> One place for all your metrics </h2>
          <div class="text-center">
            <p class="font-size-l btm-sub-heading ">
              Define your models once, let <b>BITume</b> do the integrations. Its Unified Data Layer (UDL) take your user metrics to the next level
            </p>
          </div>
        </div>
      </section>

    </div>
  </main>
</template>

<script>
export default {
name: "HomeLanding"
}
</script>

<style>

.cool {
  top: -10px;
  left: 20px;
  z-index: -1;
}

.cool-background {
  background: url(/assets/landing/res/cool-background.svg) no-repeat;
  background-size: contain;
  background-position: top right;
}

.py-m {
  padding-top: 100px;
  padding-bottom: 100px;
}

.py-l {
  padding-top: 128px;
  padding-bottom: 128px;
}

.font-size-xl {
  font-size: 42px !important;
}

.font-size-l {
  font-size: 20px !important;
}

.btm-primary-heading {
  color: #062430 !important;
  font-size: 48px;
  line-height: 60px;
}

.btm-primary-description {
  font-size: 18px;
  margin-bottom: 24px;
}

.btm-sub-heading {
  margin: 0px auto 24px;
  width: 100%;
  max-width: 800px;
}

.box-shadow-primary {
  box-shadow: 0 10px 22px -5px #009f6f4d;
}

.btn-large {
  padding: 12px 32px;
}

</style>

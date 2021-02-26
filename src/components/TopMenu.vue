<template>
  <header class="top-menu-ctrl">

    <nav class="navbar navbar-expand-lg fixed-top navbar-top-menu flex-md-row align-items-center px-md-4 bg-white">
      <a href="/" class="my-0 mr-md-auto font-weight-normal">
        <img src="/assets/landing/logo-color.svg" alt="BITume" class="bitume-logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto my-lg-0">
          <li class="nav-item active">
            <a class="p-2 navbar-item navbar-nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="p-2 navbar-item navbar-nav-link" href="#">Enterprise</a>
          </li>
          <li class="nav-item">
            <a class="p-2 navbar-item navbar-nav-link" href="#">Support</a>
          </li>
          <li class="nav-item">
            <a class="p-2 navbar-item navbar-nav-link" href="#">Pricing</a>
          </li>

          <li class="nav-item">
            <a class="p-2 navbar-item navbar-nav-link" href="#">Login</a>
          </li>
        </ul>

        <form class="form-inline my-2">
          <a href="/request-trial" class="nav-item p-2 navbar-item navbar-nav-link ml-3 btn btn-primary btn-header-cta">
            Free Trial
          </a>
        </form>

      </div>
    </nav>

  </header>
</template>

<script>
export default {
  name: "TopMenu"
}
</script>

<style>
.navbar-top-menu {
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1000;
  box-shadow: rgba(0,0,0,0.12) 0 1px 3px;

}

.bitume-logo {
  width: 120px;
  height: auto;
}

.navbar-nav-link {
  color: #434448;
  padding: 0.5em 1.2em;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.25s ease-in-out;
}

.products-dropdown .dropdown-menu {
  left: -40px;
  visibility: hidden;
  opacity: 0;
}

.products-dropdown .dropdown-menu:hover {
  visibility: visible;
  opacity: 1;
}

.products-dropdown:hover .dropdown-menu {
  visibility: visible;
  opacity: 1;
}

.large-dropdown {
  display: flex;
  padding: 32px;
  margin-top: -6px;
  box-shadow: 0 5px 25px #0000000a;
  border: 1px solid #e0e6ed;
}

.navbar-separator {
  height: 20px;
  width: 2px;
  background: #e8e8e8;
  margin: 9px .5em;
  pointer-events: none;
}

.btn-header-cta {
  background: #e7ba03 !important;
  color: #24303c !important;
}

</style>

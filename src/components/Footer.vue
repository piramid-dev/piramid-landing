<template>
  <footer>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md order-last order-md-first">© 2022 Piramid | P.IVA 11438050012</div>
        <div class="col-md d-flex justify-content-center">
          <svg class="logo" id="logo_small" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265.24 279.25"><polygon points="141.09 93.08 127.89 93.08 159.9 186.16 173.09 186.16 141.09 93.08"/><path d="M108.77,186.16H92.15V169.29h16.62Z"/></svg>
        </div>
        <div class="col-md d-flex justify-content-center justify-content-md-end">
          <ul class="navbar-nav text-uppercase">
            <li class="nav-item"><a class="nav-link" href="https://it.linkedin.com/company/piramid" target="_blank">Linkedin</a></li>
            <li class="nav-item"><a class="nav-link" href="mailto:info@piramid.studio">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="sass" scoped>
footer
  padding: 30px 0
  font-size: 12px
  @include media-breakpoint-down(md) 
    text-align: center
  .logo
    width: 120px
    path, polygon
      fill: $primary
  .navbar-nav
    flex-direction: row
    flex-wrap: wrap
    gap: 12px
    a
      color: white

</style>
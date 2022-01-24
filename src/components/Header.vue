<template>

  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#intro"><img src="/images/logo.svg" alt="Piramid" class="logo"></a>
            <div class="d-none d-lg-block collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#tools">Tools</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                    <!-- <li class="nav-item"><a class="nav-link" href="#partners">Partners</a></li> -->
                    <li class="nav-item"><a class="nav-link text-primary" href="mailto:info@piramid.studio">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
name: "Header"
}
</script>

<style lang="sass" scoped>
#mainNav
  background-color: $body-bg
  img.logo
    width: 120px

</style>
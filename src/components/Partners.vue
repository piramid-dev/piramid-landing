<template>
  <section id="partners" class="partners big-padding">
    <div class="container">
      <div class="row text-center mb-5">
          <h2 class="section-heading">{{data.title}}</h2>
          <p class="lead section-subheading text-muted">{{data.subtitle}}</p>
      </div>
      <div class="row">
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object
  },
}
</script>

<style lang="sass" scoped>
.partners
  background-image: url(/images/dot-yellow.svg)
  background-size: 20px
</style>
<template>
  <section id="partners" class="partners big-padding">
    <div class="container">
      <div class="row text-center mb-5">
          <h2 class="section-heading" v-html="data.title"></h2>
          <p class="lead section-subheading text-muted">{{data.subtitle}}</p>
      </div>
      <div class="row">
        <div class="offset-md-1 col-md-10">
          <div class="row logos d-flex">
            <img v-for="(partner, index) in data.list" :key="index" :src="'/images/partners/'+partner+'.svg'" :alt="partner" :title="partner">
          </div>
        </div>
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
  background-color: rgba($yellow, 0.05)
  background-image: url(/images/dot-yellow.svg)
  background-size: 40px
  h2
    &:after
      color: $yellow
    :deep(span)
      color: $yellow

  .logos
    & > div
      margin-bottom: 30px 
    img
      width: auto
      max-height: 30px
      margin: 0 auto
      display: block
      filter: grayscale(100%)
      transition: all .3s ease-in-out
      @include media-breakpoint-up(md)
        max-height: 40px
      &:hover
        filter: grayscale(0%)
</style>
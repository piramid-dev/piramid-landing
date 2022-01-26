<template>
  <section id="partners" class="partners big-padding">
    <div class="container">
      <div class="row text-center mb-5">
          <h2 class="section-heading" v-html="data.title"></h2>
          <p class="lead section-subheading text-muted">{{data.subtitle}}</p>
      </div>
      <div class="row">
        <div class="offset-md-1 col-md-10">
          <div class="row logos">
            <div v-for="(partner, index) in data.list" :key="index" class="d-flex align-items-center col-4 col-md-4" :class="partner">
              <img :src="'/images/partners/'+partner+'.svg'" :alt="partner" :title="partner">
            </div>
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
      min-height: 50px
      @include media-breakpoint-up(md)
        min-height: 80px
    img
      width: auto
      max-height: 30px
      max-width: 150px
      margin: 0 auto
      display: block
      filter: grayscale(100%)
      transition: all .3s ease-in-out
      @include media-breakpoint-up(md)
        max-height: 80px
      &:hover
        filter: grayscale(0%)
</style>
<template>
  <section id="about" class="about big-padding">
    <Organic />
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h2 class="section-heading" v-html="data.title"></h2>
          <p class="lead section-subheading text-muted">{{data.paragraph_1}}</p>
          <p class="lead section-subheading text-muted">{{data.paragraph_2}}</p>
          <p class="lead section-subheading text-muted mb-4">{{data.paragraph_3}}</p>
          <a class="btn btn-dark" href="mailto:info@piramid.studio">{{data.button}}</a>
        </div>
      </div>
      <div class="row">
        
      </div>
    </div>
  </section>
</template>

<script>
import Organic from './p5/Organic.vue'

export default {
  components: {Organic},
  props: {
    data: Object
  },
}
</script>

<style lang="sass" scoped>
.about
  position: relative
  overflow: hidden
  & > .container
    z-index: 10
    position: relative
  p
    margin-bottom: 10px

  .btn-dark
    border-color: $purple
    background-color: $purple
    &:hover
      background-color: darken($purple, 5%)
      border-color: darken($purple, 5%)

  h2
    &:after
      color: $purple
    :deep(span)
      color: $purple

</style>
<template>
  <section id="about" class="about big-padding">
    <Organic />
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h2 class="section-heading" v-html="data.title"></h2>
          <p class="lead section-subheading text-muted">{{data.paragraph_1}}</p>
          <p class="lead section-subheading text-muted">{{data.paragraph_2}}</p>
          <p class="lead section-subheading text-muted">{{data.paragraph_3}}</p>
          <p class="lead section-subheading text-muted mb-0">{{data.paragraph_4}}</p>
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

  h2
    &:after
      color: $primary
    :deep(span)
      color: $primary

</style>
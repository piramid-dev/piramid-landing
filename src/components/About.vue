<template>
  <section id="about" class="about big-padding">
    <Organic />
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h2 class="section-heading">{{data.title}}</h2>
          <p class="lead section-subheading text-muted mb-0">{{data.subtitle}}</p>
        </div>
      </div>
      <div class="row">
        
      </div>
    </div>
  </section>
</template>

<script>
import Organic from './Organic.vue'

export default {
  components: {Organic},
  props: {
    data: Object
  },
}
</script>

<style lang="sass" scope>
.about
  position: relative
  overflow: hidden
  & > .container
    z-index: 10
    position: relative


</style>
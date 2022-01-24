<template>
  <section id="tools" class="technologies big-padding">
    
    <div class="container">
      <div class="row text-center mb-5">
          <h2 class="section-heading" v-html="data.title"></h2>
          <p class="lead section-subheading text-muted">{{data.subtitle}}</p>
      </div>
      <div class="row">
        <div class="offset-md-2 col-md-8">
          <div class="row logos">
            <div v-for="(tool, index) in data.list" :key="index" class="col-4 col-md-3">
              <img :src="'/images/tech-logos/'+tool+'.svg'" :alt="tool" :title="tool">
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
.technologies
  position: relative
  overflow: hidden
  background-color: rgba($pink, 0.05)
  background-image: url(/images/dot-pink.svg)
  background-size: 40px

  h2
    &:after
      color: $pink
    :deep(span)
      color: $pink

  & > .container
    z-index: 10
    position: relative
    
.logos

  & > div
    margin-bottom: 30px 
  img
    width: auto
    max-height: 40px
    margin: 0 auto
    display: block
    filter: grayscale(100%)
    transition: all .3s ease-in-out
    @include media-breakpoint-up(md)
      max-height: 60px
    &:hover
      filter: grayscale(0%)
</style>
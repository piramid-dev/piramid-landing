<template>
  <section class="page-section services big-padding" id="services">
      <div class="container">
          <div class="text-center mb-5">
              <h2 class="section-heading" v-html="data.title"></h2>
              <p class="lead section-subheading text-muted">{{data.subtitle}}</p>
          </div>
          <div class="row text-center2 services-list">
              <div v-for="(service, index) in data.list" :key="index" class="col-md-4">
                
                  <h4 class="my-3">{{ service.title }}</h4>
                  <p>{{ service.text }}</p>
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
.services
  h2
    &:after
      color: $primary
    :deep(span)
      color: $primary

  .services-list
    h4
      color: $primary
</style>
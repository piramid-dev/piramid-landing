<template>
  <section id="intro" class="section intro d-flex align-items-center">
    <FlowField />
    <div class="container intro__text">
      <div class="h1">
        we <span class="text-primary">.develop</span>
      </div>
      <div class="h1">
        <span id="typed" ref="typedElement"></span>
      </div>
    </div>
    <!-- Arrow go down -->
    <a href="#services" class="do_down">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>
    </a>
  </section>
</template>

<script>
import FlowField from "./p5/FlowField.vue";
import Typed from 'typed.js'
import { onMounted, onUnmounted } from 'vue'

export default {
  components: {FlowField},
  name: 'Typed',
  setup(){
    let typedObj = null

    const initTypedJS = () => {

      const options = {
        strings: ['digital-solutions', 'partnerships'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
        cursorChar: '\\'
      };

      typedObj = new Typed('#typed', options);

    }

    onMounted (() => {
        initTypedJS()
    })
    onUnmounted (() => {
      typedObj.destroy()
    })

    return{
      initTypedJS
    }
  }

  
}
</script>


<style lang="sass">
.intro
  position: relative
  overflow: hidden
  min-height: 70vh
  @include media-breakpoint-up(md)
    min-height: 100vh

  &:before,
  &:after
    content: ''
    position: absolute
    left: 0
    width: 100%
    height: 20vh
    background-image: linear-gradient(0, transparent 20%, white 80%)
    z-index: 1

  &:before
    top: 0

  &:after
    bottom: 0
    transform: rotate(180deg)
  
  &__text
    position: relative
    z-index: 1
  .h1
    @include media-breakpoint-up(lg)
      font-size: 80px

.typed-cursor
  color: $primary

.do_down
  position: absolute
  bottom: 10px
  left: 50%
  animation: scroll infinite .6s alternate
  z-index: 10
  svg
    width: 40px
    height: 40px

@keyframes scroll
  0%
    transform: translate(-50%, 0)
  100%
    transform: translate(-50%, 5px)
</style>
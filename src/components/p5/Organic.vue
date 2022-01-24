<template>
  <div>
    <div ref="organic_box" id="organic_box" class="canvas_box"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Shape from './organic-shape.js'
import P5 from 'p5'

export default {
  setup() {
    const organic_box = ref(null)

    onMounted(() => {

      const MAX_SHAPES = 16
      const shapesArray = []

      const sketch = (s) => {
        s.setup = () => {

          const canvas = s.createCanvas(window.innerWidth, organic_box.value.clientHeight)
          canvas.id('canvas-' + Math.floor(1000 * s.random()))
          canvas.parent('organic_box')

          for (let index = 0; index <= MAX_SHAPES; index++) {
            const paint = s.map(index, 0, MAX_SHAPES, 0, 255)
            const shape = new Shape(s, paint, index)
            shapesArray.push(shape)
          }
        }
        s.draw = () => {
          s.background(255)

          for (let index = MAX_SHAPES; index >= 0; index--) {
            shapesArray[index].update(index)
          }
        }

        s.windowResized = function () {
          s.resizeCanvas(window.innerWidth, organic_box.value.clientHeight)
        }

      }
      // eslint-disable-next-line no-new
      new P5(sketch, 'organic_box')
    })

    return {
      organic_box
    }
  },
}
</script>

<style lang="sass" scoped>
.canvas_box
  opacity: .2
</style>

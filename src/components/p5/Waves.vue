<template>
  <div>
    <div ref="waves_box" id="waves_box" class="canvas_box"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import P5 from 'p5'

const N_LINES = 40
const N_POINTS = 9

export default {

  setup() {
    const waves_box = ref(null)

    onMounted(() => {
    
      const sketch = (s) => {
        s.setup = () => {
          const canvas = s.createCanvas(window.innerWidth, waves_box.value.clientHeight)
          canvas.id('canvas-' + Math.floor(1000 * s.random()))
          canvas.parent('waves_box')
        }
        s.draw = () => {
          s.background(0)

          for (let index = 0; index < N_LINES; index++) {
            const paint = s.map(index, 0, N_LINES, 0, 255)
            s.stroke(paint)
            s.noFill()
            drawLine(index)
          }
        }

        s.windowResized = function () {
          s.resizeCanvas(window.innerWidth, waves_box.value.clientHeight)
        }

        function drawLine(index = 0) {
          s.beginShape()
          for (let i = -1; i <= N_POINTS + 1; i++) {
            const mouseFactorX = s.map(s.mouseX, 0, s.width, 0.8, 1.2)
            const mouseFactorY = s.map(s.mouseY, 0, s.height, 0.8, 1.2)
            const x = s.map(i, 0, N_POINTS, 0 , s.width )
            const y =
              s.height *
              s.noise(x * 0.001 * mouseFactorX, mouseFactorY * index * 0.02, s.frameCount * 0.003)
            s.curveVertex(x, y)
          }
          s.endShape()
        }
      }
      // eslint-disable-next-line no-new
      new P5(sketch, 'waves_box')
    })

    return {
      waves_box
    }
  }
}
</script>


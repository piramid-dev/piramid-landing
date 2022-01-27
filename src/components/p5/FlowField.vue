<template>
  <div>
    <div ref="flow_box" id="flow_box" class="canvas_box"></div>
  </div>
</template>

<script>
import Particle from './flowfield.js'
import { ref, onMounted } from 'vue'
import P5 from 'p5'


export default {

  setup() {
    const flow_box = ref(null)

    const inc = 0.05
    const scl = 30
    const q = 1
    const lines = []
    let cols, rows
    let angle, vector, xoff, yoff

    onMounted(() => {
    
      const sketch = (s) => {
        s.setup = () => {
          const canvas = s.createCanvas(window.innerWidth, flow_box.value.clientHeight)
          canvas.id('canvas-' + Math.floor(1000 * s.random()))
          canvas.parent('flow_box')
          cols = s.floor(flow_box.value.clientWidth/scl) + 2
          rows = s.floor(flow_box.value.clientHeight/scl) + 1

          yoff = 0
          for (var y = 0; y < rows; y++){
            xoff = 0
            const lines_x = []
            for(var x = 0; x < cols; x++){
              const line_x = new Particle(s, x, y, scl)
              lines_x.push(line_x)
            }
            lines.push(lines_x)
          }
        }
        s.draw = () => {
          s.background(255)

          yoff = 0
          for (var y = 0; y < rows ; y++){
            xoff = 0
            for(var x = 0; x < cols ; x++){
              lines[y][x].update(xoff, yoff)
              lines[y][x].draw()
              xoff += inc
            }
            yoff += inc
          }
        }

        s.windowResized = function () {
          s.resizeCanvas(window.innerWidth, flow_box.value.clientHeight)
        }

      }
      // eslint-disable-next-line no-new
      new P5(sketch, 'flow_box')
    })

    return {
      flow_box
    }
  }
}
</script>



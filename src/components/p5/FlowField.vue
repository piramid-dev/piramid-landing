<template>
  <div>
    <div ref="flow_box" id="flow_box" class="canvas_box"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import P5 from 'p5'


export default {

  setup() {
    const flow_box = ref(null)

    var inc = 0.05
    var scl = 30
    var cols, rows
    var q = 1

    onMounted(() => {
    
      const sketch = (s) => {
        s.setup = () => {
          const canvas = s.createCanvas(window.innerWidth, flow_box.value.clientHeight)
          canvas.id('canvas-' + Math.floor(1000 * s.random()))
          canvas.parent('flow_box')
          cols = s.floor(flow_box.value.clientWidth/scl)
          rows = s.floor(flow_box.value.clientHeight/scl)
        }
        s.draw = () => {
          s.background(255)

          // const mouseFactorX = s.map(s.mouseX, 0, s.width, 0.8, 1.2)
          // const mouseFactorY = s.map(s.mouseY, 0, s.height, 0.8, 1.2)
          // const index = 100;

          var yoff = 0
          for (var y = 0; y < rows + 1; y++){
            var xoff=0
            for(var x = 0; x < cols + 2; x++){
              // var index = (x + y * s.width) * 4
              var angle =  s.noise( xoff, yoff, s.frameCount * 0.01) * s.TWO_PI
              // s.noise(x * 0.001 * mouseFactorX, y * mouseFactorY * index * 0.02, s.frameCount * 0.003)
              var v = P5.Vector.fromAngle(angle)
              xoff += inc

              // const paint = s.map(s.sin(x * 0.1), -1, 1, 0, 255)
              // s.stroke(paint)

              s.stroke(150)
              s.strokeWeight(1)
              s.push(0)
              s.translate(x * scl, y * scl)
              s.rotate(v.heading())
              s.line(0, 0, scl, 0)
              s.pop()
            }
            yoff += inc
          }

          // inc = s.map(s.sin(q),-1,1,0,0.3)
          // inc = s.frameCount * 0.0002
          // q += 0.01
          // if (q > s.TWO_PI){
          //   q = 0
          // }

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



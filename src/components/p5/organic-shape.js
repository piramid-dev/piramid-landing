function Shape(s, c, index) {
  this.x = s.width / 2
  this.y = s.height / 2
  this.alpha = c
  this.position = s.createVector(this.x, this.y)
  this.radius = 100 * (index * 0.4 + 1)
  this.noise = index * 0.1
  this.noisePos = index * 0.1
  this.resolution = 30
  this.points = []

  this.update = function (index) {
    const xnoise = s.noise(this.noisePos) * 100
    const ynoise = s.noise(this.noisePos) * 100

    s.fill(255)
    s.stroke(this.alpha)

    s.beginShape()
    for (let a = 0; a < s.TWO_PI; a += s.TWO_PI / this.resolution) {
      // let mouseXVariant = 1
      // if (s.mouseX > s.width / 2) {
      //   mouseXVariant = s.map(s.mouseX, s.width / 2, s.width, 1, 0.8)
      // } else {
      //   mouseXVariant = s.map(s.mouseX, 0, s.width / 2, 0.8, 1)
      // }
      // const mouseYVariant = s.map(s.mouseY, 0, s.height, -0.2, 0.2)

      const noiseXoff = s.map(s.cos(a), -1, 1, 0, 1)
      const noiseYoff = s.map(s.sin(a), -1, 1, 0, 1)
      const variant = s.map(
        s.noise(noiseXoff, noiseYoff, this.noise),
        0.0,
        1.0,
        0.5,
        1.0
      )

      if (s.mouseX != 0 || s.mouseY != 0) {
        this.x = s.lerp(this.x, s.width / 4 + s.mouseX / 2, 0.001)
        this.y = s.lerp(this.y, s.height / 4 + s.mouseY / 2, 0.001)
      }

      const x = this.x + xnoise + s.cos(a) * this.radius * variant
      const y = this.y + ynoise + s.sin(a) * this.radius * variant
      this.points.push({ x, y })
      s.curveVertex(x, y)
    }
    s.endShape(s.CLOSE)
    this.noise += 0.02
    this.noisePos += 0.01
  }
}

// module.exports = Shape

export default Shape

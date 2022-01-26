function Shape(s, c, index, canvas) {
  this.x = canvas.width / 2
  this.y = canvas.width / 2
  this.alpha = c
  this.position = s.createVector(this.x, this.y)
  this.radius = 100 * (index * 0.4 + 1)
  this.noise = index * 0.1
  this.noisePos = index * 0.1
  this.resolution = 30
  this.points = []

  this.update = function (canvas) {
    const xnoise = s.noise(this.noisePos) * 100
    const ynoise = s.noise(this.noisePos) * 100

    s.fill(255)
    s.stroke(this.alpha)

    s.beginShape()
    for (let a = 0; a < s.TWO_PI; a += s.TWO_PI / this.resolution) {
      const noiseXoff = s.map(s.cos(a), -1, 1, 0, 1)
      const noiseYoff = s.map(s.sin(a), -1, 1, 0, 1)
      const variant = s.map(
        s.noise(noiseXoff, noiseYoff, this.noise),
        0.0,
        1.0,
        0.5,
        1.0
      )

      if (s.mouseX != 0 && s.mouseY > 0 && s.mouseY < canvas.height) {
        this.x = s.lerp(this.x, s.mouseX, 0.001)
        this.y = s.lerp(this.y, s.mouseY, 0.001)
      } else {
        this.x = s.lerp(this.x, canvas.width / 2, 0.002)
        this.y = s.lerp(this.y, canvas.height / 2, 0.002)
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

export default Shape

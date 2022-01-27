import P5 from 'p5'

function Particle(s, x, y, scl) {
  this.angle = 0
  this.scl = scl
  this.positionOriginal = s.createVector(x * this.scl, y * this.scl)
  this.position = s.createVector(x * this.scl, y * this.scl)
  this.color = 150

  this.update = function (xoff, yoff) {
    // Do something based on mouse position
    // let mousePos = s.createVector(s.mouseX, s.mouseY)
    // if (P5.Vector.dist(this.position, mousePos) < 200) {
    //   this.position.x = s.lerp(this.position.x, s.mouseX, 0.01)
    // } else {
    //   this.position.x = s.lerp(this.position.x, this.positionOriginal.x, 0.01)
    // }

    this.angle = s.noise(xoff, yoff, s.frameCount * 0.01) * s.TWO_PI
    this.vector = P5.Vector.fromAngle(this.angle, 10)
  }

  this.draw = function () {
    s.stroke(this.color)
    s.strokeWeight(1)
    s.push(0)
    s.translate(this.position.x, this.position.y)
    s.rotate(this.vector.heading())
    s.line(0, 0, this.scl, 0)
    s.pop()
  }
}

export default Particle

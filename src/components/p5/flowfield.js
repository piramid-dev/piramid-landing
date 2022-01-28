import P5 from 'p5'

function Particle(s, x, y, scl) {
  this.angle = 0
  this.scl = scl
  this.sclOriginal = scl
  this.inc = 0
  this.positionOriginal = s.createVector(x * this.scl, y * this.scl)
  this.position = s.createVector(x * this.scl, y * this.scl)
  this.color = 150
  this.velocity = s.createVector(0, 0)
  this.acc = s.createVector(0, 0)

  this.update = function (xoff, yoff) {
    this.velocity.add(this.acc)
    this.velocity.limit(5)
    this.position.add(this.velocity)

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
    // s.ellipse(0, 0, 10, 10)
    s.pop()
  }

  this.repulsion = function (mousePos) {
    if (P5.Vector.dist(this.position, mousePos) < 80) {
      this.acc = P5.Vector.sub(this.position, mousePos)
      this.color = [34, 188, 176]
      this.acc.setMag(0.01)
      this.scl = this.scl <= 1 ? 1 : this.scl * 0.95
    } else {
      this.scl =
        this.scl >= this.sclOriginal ? this.sclOriginal : this.scl * 1.2
      this.acc = P5.Vector.sub(this.positionOriginal, this.position)
      this.color = 150
      if (P5.Vector.dist(this.position, this.positionOriginal) < 10) {
        this.velocity.mult(0.1)
        this.acc.mult(0.1)
      }
    }
  }
}

export default Particle

class TriangleOnCircle {
  constructor(center, radius) {
    this.points = [];
    for (let i = 0; i < 3; i++) {
      let angle = random(0, 2 * PI);
      this.points.push({
        x: center.x + radius * cos(angle),
        y: center.y + radius * sin(angle),
      });
    }
  }
}

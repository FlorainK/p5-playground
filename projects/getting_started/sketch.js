let c;

function setup() {
  background(220);
  createCanvas(windowWidth, windowHeight);
  c = circle(windowWidth / 2, windowHeight / 2, 200);
}

function draw() {
  frameRate(5);
  t = new TriangleOnCircle({ x: windowWidth / 2, y: windowHeight / 2 }, 100);
  line(t.points[0].x, t.points[0].y, t.points[1].x, t.points[1].y);
  line(t.points[1].x, t.points[1].y, t.points[2].x, t.points[2].y);
  line(t.points[2].x, t.points[2].y, t.points[0].x, t.points[0].y);
}

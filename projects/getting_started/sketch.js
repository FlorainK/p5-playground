let c;

function setup() {
  background(220);
  createCanvas(windowWidth, windowHeight);
  // c = circle(windowWidth / 2, windowHeight / 2, 200);
  t = new TriangleOnCircle(
    { x: windowWidth / 2, y: windowHeight / 2 },
    windowWidth / 4
  );
  r = 0;
  g = 0;
  b = 0;
}

function draw() {
  frameRate(60);
  switch (frameCount % 3) {
    case 0:
      line(t.points[0].x, t.points[0].y, t.points[1].x, t.points[1].y);
      break;
    case 1:
      line(t.points[1].x, t.points[1].y, t.points[2].x, t.points[2].y);
      break;
    case 2:
      line(t.points[2].x, t.points[2].y, t.points[0].x, t.points[0].y);
      t = new TriangleOnCircle(
        { x: windowWidth / 2, y: windowHeight / 2 },
        windowWidth / 4
      );
  }
  if (frameCount % 500 === 0) {
    if (r === 0) {
      r = 255;
      g = 255;
      b = 255;
    } else {
      r = 0;
      g = 0;
      b = 0;
    }
    stroke(r, g, b);
  }
}

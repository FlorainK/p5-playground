function setup() {
  count = 20;
  createCanvas(windowWidth, windowHeight);
  lowerRightCorner = [(width * 3) / 4, (height * 3) / 4];
  upperLeftCorner = [width / 4, height / 4];
  logos = [];
  for (i = 0; i < count; i++) {
    logos[i] = new Logo(upperLeftCorner, lowerRightCorner, 10);
  }
}

function draw() {
  background(220);
  rect(upperLeftCorner[0], upperLeftCorner[1], width / 2, height / 2);
  for (i = 0; i < count; i++) {
    logos[i].move();
    logos[i].show();
  }
}

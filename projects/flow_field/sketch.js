const rows = 50;
const columns = 50;
var offset = 0;
var change = 0.01;
var particles = [];
var particle_count = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < particle_count; i++)
    particles.push(new Particle(rows, columns, 100));
}

function draw() {
  background(255);
  var flowfiel_mat = [];
  for (var r = 0; r < rows; r++) {
    var row = [];
    for (var c = 0; c < columns; c++) {
      let v = createVector(5, 5);

      noise_factor = noise(r * 0.1, c * 0.1, offset);
      v.rotate(noise_factor * TWO_PI);
      row.push(v);
      // line(
      //   (windowWidth * c) / columns,
      //   (windowHeight * r) / rows,
      //   (windowWidth * c) / columns + v.x,
      //   (windowHeight * r) / rows + v.y
      // );
    }
    flowfiel_mat.push(row);
  }
  offset += change;
  particles.forEach((particle) => {
    particle.update(flowfiel_mat);
    particle.show();
  });
  // frameRate(1);
}

// next steps:
// - save vectors in matrix once
// - create point class which
//  + takes vectormatrix
//  + choses matching vector
//  + adapts point direction and position
//  + shows point

function preload() {
  // put preload code here
}

var value = 0;
var col = 0;
var customHue = 0;
var customSaturation = 0;
// var customHue2 = 0;
// var customSaturation2 = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB, 255);

}

function draw() {
  // put drawing code here

  var s = 'Click to more animation';
  textAlign(CENTER);
  textFont('Helvetica', 15);
  fill(255);
  text(s, width / 2, height - 25, 165, 80);
  circles1();


}

function mouseClicked() {
  if (value == 0) {
    circles2();
    value = 1;
  } else if (value == 1) {
    circles3();
    value=1;
  }
}

function circles1() {
  for (var x = 50; x < mouseX; x += 50) {
    for (var y = 50; y < height - 50; y += 50) {
      //var customHue = x / (width - 50) * 255;
      var customSaturation = x / (width - 50) * 255;
      col = map(mouseX, 0, width, 0, 255);
      fill(col, customSaturation, 255);
      noStroke();
      ellipse(x, y, 25);
    }
  }
}

function circles2() {
    for (var x1 = 75; x1 < width - 25; x1 += 100) {
      for (var y1 = 55; y1 < height - 25; y1 += 50) {
        customHue = x1 / (width - 25) * 255;
        customSaturation = x1 / (width - 25) * 255;
        noStroke();
        ellipse(x1, y1, 15);
        fill(customHue, customSaturation, 255);
    }
  }
}

function circles3() {
  for (var x2 = 125; x2 < width - 25; x2 += 100) {
    for (var y2 = 55; y2 < height - 25; y2 += 25) {
      customHue2 = x2 / (width) * 255;
      customSaturation2 = x2 / (width) * 255;
      ellipse(x2, y2, 15);
      value = 2;
      if(random()<0.5)
  {
     fill(255,0,0);
  } else {
     fill(200);
  }

    }
  }


}

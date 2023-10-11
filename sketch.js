let maskImg = null;
let renderCounter = 0;
let sourceImg = null;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent("canvasContainer");

  imageMode(CENTER);
  noStroke();
  background(69);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  colorMode(HSB);
}

// let xStop =160;
// let yStop = 160;
let xStop = 1920;
let yStop = 1080;
let OFFSET = 10;

function draw() {
  let num_lines_to_draw = 40;
  // get one scanline
  for (
    let j = renderCounter;
    j < renderCounter + num_lines_to_draw && j < yStop;
    j++
  ) {
    for (let i = 0; i < xStop; i++) {
      colorMode(RGB);
      let pix = sourceImg.get(i, j);
      // create a color from the values (always RGB)
      let mask = maskImg.get(i, j);

      //outisde (how to draw background with normal)
      if (mask[1] < 128) {
        //colors
        let fuzz = color(pix);

        colorMode(RGB)

        let r = red(fuzz);
        let g = green(fuzz);
        let b = blue(fuzz);

        newRed = map(r, 90, 100, 0, random(185));
        newGreen = map(g, 90, 100, 0, random(110));
        newBlue = map(b, 90, 100, 0, random(105));
        
        newColor = color(newRed, newGreen,newBlue, 135);

        //pixels position
        let wave = sin(i * random(50));
        let xMovement = map(wave, -1, 1, -OFFSET, OFFSET);
        wave = tan(j * random(50));
        let yMovement = map(wave, -1, 1, -OFFSET, OFFSET);

        
        set(i + xMovement + (random(2, 10)*tan(renderCounter)), j - yMovement, newColor);

        let CRTLine = color(random(40, 100));
        set(i, -20*random(sin(j/10)) + j, CRTLine);
      }
      //inside
      else {
        colorMode(HSB);
        let col = color(pix);
        
        let h = hue(col);
        let s = saturation(col);
        let b = brightness(col);

        newHue = map(h, 0, 100, 20, 150);
        newSat = map(s, 0, 100, 80, 100);
        newBri = map(b, 0, 100, 100, 360);

        strokeCol = stroke(255);
        newColor = color(newHue, newSat, newBri);
        
        set(i+18, j+5, strokeCol);
        set(i, j, newColor);
      }
    }
  }
  renderCounter = renderCounter + num_lines_to_draw;
  updatePixels();
  print(renderCounter);
  if (renderCounter > yStop) {
    console.log("Done!");
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == "!") {
    saveBlocksImages();
  }
}

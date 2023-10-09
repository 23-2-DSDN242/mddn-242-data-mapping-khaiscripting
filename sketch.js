let maskImg=null;
let renderCounter=0;
let sourceImg=null;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0, 0, 120);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  colorMode(HSB);
}

let xStop = 600;
let yStop = 800;
// let xStop = 1920;
// let yStop = 1080;

function draw () {
  let num_lines_to_draw = 40;
  // get one scanline
  for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<xStop; j++) {
    for(let i=0; i<yStop; i++) {
      colorMode(RGB);
      let pix = sourceImg.get(i, j);
      // create a color from the values (always RGB)
      let mask = maskImg.get(i, j);

      colorMode(RGB);

      //inside
      if(mask[0] > 128) {
        colorMode(HSB)
        let col = color(pix);

        let h = hue(col);
        let s = saturation(col);
        let b = brightness(col);

        let newHue = map(h, 0, 100, 0, 360);
        let newSat = map(s, 0, 100, 0, 360);
        let newBri = map(b, 0, 100, 0, 360);

        let newColor = color(newHue, newSat, newBri, 10);

        set(i, j, newColor);
      }
      //outisde (how to draw background with normal)
      else {
        // draw the full pixels
        set(i, j, pix);
      }
    }
  }
  renderCounter = renderCounter + num_lines_to_draw;
  updatePixels();
  // print(renderCounter);
  if(renderCounter > yStop) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
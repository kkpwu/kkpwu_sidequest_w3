// Add this at the very top of scene2.js
let scene2StartTime = 0;

function playScene2() {
  // Set the start time once when we arrive
  if (scene2StartTime === 0) scene2StartTime = millis();

  let rectW = 400;
  let rectH = 200;
  let rectX = width / 2 - rectW / 2;
  let rectY = height / 2 - rectH / 2;

  fill(255);
  strokeWeight(2.5);
  rect(rectX, rectY, rectW, rectH);

  line(width / 2, rectY, width / 2, rectY + rectH);

  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Click the RIGHT side to pass", width / 2, 100);
}

function checkScene2Click() {
  // 1. SAFETY GATE: Ignore clicks for the first 200 milliseconds of the scene
  // This prevents the "Ghost Click" from Scene 1
  if (millis() - scene2StartTime < 800) return;

  let rectW = 400;
  let rectH = 200;
  let rectX = width / 2 - rectW / 2;
  let rectY = height / 2 - rectH / 2;

  // 2. CHECK RIGHT SIDE (Win)
  if (
    mouseX > width / 2 &&
    mouseX < width / 2 + rectW / 2 &&
    mouseY > rectY &&
    mouseY < rectY + rectH
  ) {
    scene2StartTime = 0; // Reset for next time
    registerWin(); // Use our global win logic!
    inputField.show();
    submitBtn.show();
  }
  // 3. CHECK LEFT SIDE (Loss)
  else if (
    mouseX > rectX &&
    mouseX < width / 2 &&
    mouseY > rectY &&
    mouseY < rectY + rectH
  ) {
    scene2StartTime = 0;
    registerMiss(); // Use our global loss logic!
  }
}

function playLoseScene() {
  background(50, 0, 0); // Dark red
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(50);
  text("YOU LOST", width / 2, height / 2 - 50);

  textSize(20);
  text("Your health reached 0.", width / 2, height / 2 + 20);
  text("Press 'R' to Restart Sidequest W3", width / 2, height / 2 + 70);
}

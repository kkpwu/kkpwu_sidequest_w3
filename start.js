function playStartScene() {
  fill(0); // Black text
  textAlign(CENTER, CENTER);

  // Title
  textSize(50);
  text("QUICK THINKING", width / 2, height / 2 - 50);

  // Instructions
  textSize(20);
  text("Get 3 wins to become a win!", width / 2, height / 2 + 25);
  text("Press SPACE to Start", width / 2, height / 2 + 50);
}

function keyPressed() {
  if (currentScene === 0 && key === " ") {
    currentScene = 1;
  }
}

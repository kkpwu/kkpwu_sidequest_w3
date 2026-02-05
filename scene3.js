function setupScene3() {
  inputField = createInput("");
  inputField.position(width / 2 - 100, height / 2);
  inputField.hide(); // Hide until Scene 3 starts

  submitBtn = createButton("Submit");
  submitBtn.position(inputField.x + inputField.width + 10, height / 2);
  submitBtn.mousePressed(checkSpelling);
  submitBtn.hide();
}

function playScene3() {
  textAlign(CENTER, CENTER);
  textSize(24);
  text("Hint: Your Program Name", width / 2, height / 2 - 80);
}

function checkSpelling() {
  let answer = inputField.value();
  if (answer === "Global Business and Digital Arts") {
    inputField.hide();
    submitBtn.hide();
    currentScene = "win";
  } else {
    goToLose();
    btn1.hide();
    inputField.hide();
    submitBtn.hide();
    registerMiss();
    if (health > 0) {
      currentScene = 1;
      timer = 5; // Reset timer for Scene 1
    }
  }
}

function goToLose() {
  currentScene = "lose";
}

function keyPressed() {
  // Only allow global keys if the user isn't typing in Scene 3
  if (currentScene === 3) return;

  if (currentScene === 0 && key === " ") {
    currentScene = 1;
  } else if (currentScene === "lose" && (key === "r" || key === "R")) {
    resetGame();
  }
}

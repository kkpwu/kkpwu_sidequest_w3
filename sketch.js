// Main sketch file
let timer = 3;
let btn1;
let inputField;
let submitBtn;
let currentScene = 0;
let health = 100;
let consecutiveWins = 0;

function setup() {
  createCanvas(800, 600);

  // Initialize Scene 1 Button
  btn1 = createButton("Click Me Quickly!");
  btn1.hide();
  btn1.mousePressed(handleButtonClick); // Ensure this matches the function name
  moveButtonRandomly();
  setupScene3();
}

function draw() {
  background(220);

  // 1. THE SCENE CONTROLLER
  if (currentScene === 0) {
    playStartScene();
  } else if (currentScene === 1) {
    playScene1();
  } else if (currentScene === 2) {
    playScene2();
  } else if (currentScene === 3) {
    playScene3();
  } else if (currentScene === "win") {
    showWinScreen();
  } else if (currentScene === "lose") {
    showLoseScreen();
  }

  // 2. THE UI OVERLAY
  // We put this at the bottom so the health bar is ALWAYS drawn on top
  displayUI();
}

// --- LOGIC FUNCTIONS ---

function displayUI() {
  push(); // Keeps styling separate
  // Health Bar Background
  fill(50);
  rect(20, 20, 200, 20);

  // Actual Health (Red to Green)
  fill(255 - health * 2, health * 2, 0);
  rect(20, 20, map(health, 0, 100, 0, 200), 20);

  // Win Counter
  fill(0);
  textAlign(LEFT);
  textSize(16);
  text("Wins: " + consecutiveWins + "/3", 20, 60);
  pop();
}

function registerWin() {
  consecutiveWins++;

  if (consecutiveWins >= 3) {
    currentScene = "win";
  } else {
    // Explicitly define the path
    if (currentScene === 1) {
      currentScene = 2;
    } else if (currentScene === 2) {
      currentScene = 3;
    }

    timer = 3; // Reset the clock for the new scene
    moveButtonRandomly(); // Move the button for the next time it appears
  }
}

function registerMiss() {
  health -= 20;
  consecutiveWins = 0; // Reset consecutive streak
  if (health <= 0) {
    currentScene = "lose";
  }
}

// --- SCENE LOGIC ---

function playScene1() {
  btn1.show();

  textAlign(CENTER, CENTER);
  textSize(80);
  text(timer, width / 2, height / 2 - 200);

  // Timer Countdown
  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
  }

  // What happens if timer hits 0
  if (timer <= 0) {
    btn1.hide();
    registerMiss(); // Deduct health
    timer = 5; // Reset timer so it doesn't keep deducting health every frame
  }
}

function goToScene2() {
  if (timer > 0) {
    btn1.hide();
    registerWin(); // Use the win logic!
  }
}

// Global click detection
function mousePressed() {
  if (currentScene === 2) {
    checkScene2Click();
  }
}

function keyPressed() {
  // 1. If we are on the START screen, only listen for SPACE
  if (currentScene === 0) {
    if (key === " ") {
      currentScene = 1;
    }
  }

  // 2. If we are on the LOSE screen, only listen for R
  else if (currentScene === "lose") {
    if (key === "r" || key === "R") {
      resetGame();
    }
  }
}

// Simple Win/Lose Screen Functions
function showWinScreen() {
  background(0, 255, 0);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("YOU ARE A MASTER!", width / 2, height / 2);
}

function showLoseScreen() {
  background(255, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255);
  text("GAME OVER", width / 2, height / 2);
}

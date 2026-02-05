let btn; // Declare globally

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create the button once and hide it immediately
  btn = createButton("Click Me Quickly!");
  btn.position(width / 2 - 50, height / 2 + 200);
  btn.hide();

  // Use the .mousePressed() method instead of a custom distance check
  btn.mousePressed(handleButtonClick);
}

function playScene1() {
  // 1. Show the button
  btn1.show();

  // 2. Display the timer
  textAlign(CENTER, CENTER);
  textSize(80);
  fill(0);
  text(timer, width / 2, height / 2);

  // 3. Countdown logic (only if timer is above 0)
  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
  }

  // 4. ONLY trigger a miss if the timer hits exactly 0
  if (timer <= 0) {
    btn1.hide();
    registerMiss();
    // IMPORTANT: Reset the timer immediately so registerMiss doesn't
    // run 60 times per second while timer is 0
    timer = 3;
    currentScene = 0; // Send them back to start or a fail screen
  }
}

function handleButtonClick() {
  // 1. Only run if we are actually in Scene 1
  if (currentScene === 1 && timer > 0) {
    btn1.hide(); // 2. HIDE FIRST to stop double-clicks
    registerWin(); // 3. Then change the scene
  }
}

function handleButtonClick() {
  if (timer > 0 && currentScene === 1) {
    btn1.hide();
    registerWin(); // This handles the +1 win and moves the scene
  }
}

function goToScene2() {
  if (timer > 0) {
    btn1.hide(); // CRITICAL: Hide before changing scenes
    currentScene = 2;
  }
}

function moveButtonRandomly() {
  // width - 100 and height - 50 ensures the button doesn't go off-screen
  let randomX = random(50, width - 100);
  let randomY = random(50, height - 50);
  btn1.position(randomX, randomY);
}

if (!localStorage.getItem("questions-answered")) {
  localStorage.setItem("questions-answered", 0);
}

const container = document.getElementById("container");
let score = 0;
let answer;
let operator = "+";
let achievements = localStorage.getItem("achievements") || [];

const achievementsList = {
  "Baby steps": "Answer your first question",
  "Doing well": "Answer ten questions",
  "Arithmetic god": "Achieve a highscore of 10",
  "You should be doing quantum mechanics by now": "Achieve a highscore of 20",
  "Nice": "Achieve a highscore of 69",
  "Cheater":"Achieve a highscore of 69420"
}

const gradients = {
  "Baby steps": "linear-gradient(45deg, rgba(241, 168, 241, 0.5), rgba(0, 213, 255, 0.5))",
  "Doing well": "linear-gradient(45deg, rgba(0, 89, 255, 0.25), rgba(0, 255, 0, 0.25))",
  "Arithmetic god": "linear-gradient(45deg, rgba(197, 21, 0, 0.25), rgba(255, 0, 255, 0.25))",
  "You should be doing quantum mechanics by now": "linear-gradient(45deg, rgba(255, 0, 255, 0.25), rgba(0, 0, 255, 0.25))",
  "Nice": "url(https://i.pinimg.com/originals/8a/39/03/8a390326148f845c0e26c23d56b7fde9.gif)",
  "Cheater": "url(https://i.pinimg.com/originals/8a/39/03/8a390326148f845c0e26c23d56b7fde9.gif)" 
}

document.getElementById("highscore").innerText = `Highscore: ${localStorage.getItem("highscore") || 0}`;

if (localStorage.getItem("highscore") == "10" && !localStorage.getItem("arithmetic-god-triggered")) {
  triggerAchievement("Arithmetic god");

  localStorage.setItem("arithmetic-god-triggered", true);
}

else if (localStorage.getItem("highscore") == "20") {
  triggerAchievement("You should be doing quantum mechanics by now");
}

else if (localStorage.getItem("highscore") == "69") {
  triggerAchievement("Nice");
}

else if (localStorage.getItem("highscore") == "69420") {
  triggerAchievement("Cheater");
}

function start() {
  container.style.opacity = "0";

  setTimeout(() => {
    container.innerHTML = `
      <div class="card column">
        <h1 id="question"></h1>

        <input id="input" type="text" placeholder="Answer here" oninput="mark()" autofocus autocomplete="off">
      </div>
    `;

    container.style.opacity = "1";
    document.getElementById("progress-container").style.opacity = "1";

    document.getElementById("progress").style.animation = "10s linear progress-determinate reverse both";

    ask();

    setTimeout(() => {
      end();
    }, 10000);
  }, 250);
}

function ask() {
  document.getElementById("input").value = "";

  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);

  if (operator == "+") {
    answer = num1 + num2;

    document.getElementById("question").innerText = `${num1} + ${num2}`;
  }

  else if (operator == "-") {
    answer = num1 - num2;

    document.getElementById("question").innerText = `${num1} - ${num2}`;
  }

  else if (operator == "*") {
    answer = num1 * num2;

    document.getElementById("question").innerText = `${num1} * ${num2}`;
  }

  else if (operator == "/") {
    answer = num1 - num2;

    document.getElementById("question").innerText = `${num1} / ${num2}`;
  }
}

function mark() {
  const input = document.getElementById("input").value;

  if (input == answer) {
    localStorage.setItem("questions-answered", Number(localStorage.getItem("questions-answered")) + 1);

    if (!localStorage.getItem("answered-question")) {
      triggerAchievement("Baby steps");
      localStorage.setItem("answered-question", true);
    }

    ask();
    
    score++;

    if (localStorage.getItem("questions-answered") == 10) {
      triggerAchievement("Doing well");
    }
  }
}

function end() {
  if (score > localStorage.getItem("highscore")) {
    localStorage.setItem("highscore", score);
  }

  location.reload();
}

function reset() {
  localStorage.clear();
  location.reload();
}

function setOperator(newOperator) {
  operator = newOperator;

  document.getElementById(operator).style.backgroundColor = "rgba(0, 89, 255, 0.5)";

  if (operator != "+") {
    document.getElementById("+").style.backgroundColor = "rgba(0, 89, 255, 0.25)";
  }

  if (operator != "-") {
    document.getElementById("-").style.backgroundColor = "rgba(0, 89, 255, 0.25)";
  }

  if (operator != "*") {
    document.getElementById("*").style.backgroundColor = "rgba(0, 89, 255, 0.25)";
  }

  if (operator != "/") {
    document.getElementById("/").style.backgroundColor = "rgba(0, 89, 255, 0.25)";
  }
}

function triggerAchievement(achievement) {
  const achievementTitle = achievement;
  const achievementDescription = achievementsList[achievement];

  const gradient = gradients[achievement];

  const achievementSnackbar = document.createElement("div");

  achievementSnackbar.classList.add("snackbar");
  achievementSnackbar.classList.add("row");
  achievementSnackbar.classList.add("top");

  achievementSnackbar.style.paddingTop = "0";
  achievementSnackbar.style.paddingBottom = "0";
  achievementSnackbar.style.left = "0";
  achievementSnackbar.style.marginLeft = "1rem";
  achievementSnackbar.style.backgroundImage = gradient;

  achievementSnackbar.innerHTML = `
    <h1 style="font-size: 5rem;" class="material-symbols-rounded">trophy</h1>

    <div class="column" style="align-items: flex-start; gap: 0;">
      <h1 style="margin: 0.5rem;">${achievementTitle}</h1>
      <p style="margin: 0.5rem;">${achievementDescription}</p>
    </div>
  `;

  document.body.appendChild(achievementSnackbar);

  setTimeout(() => {
    achievementSnackbar.remove();
  }, 5000);
}
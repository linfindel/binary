if (!localStorage.getItem("questions-answered")) {
  localStorage.setItem("questions-answered", 0);
}

const container = document.getElementById("container");
let score = 0;
let answer;
let operator = localStorage.getItem("operator") || "+";
let difficulty = localStorage.getItem("difficulty") || "easy";
let achievements = localStorage.getItem("achievements") || [];
let leaderboard;

const achievementsList = {
  "Baby steps": "Answer your first question",
  "Doing well": "Answer ten questions",
  "Arithmetic god": "Achieve a highscore of 10",
  "You should be doing quantum mechanics by now": "Achieve a highscore of 20",
  "Nice": "Achieve a highscore of 69",
  "Cheater":"Achieve a highscore of 69420",
  "Medium is locked": "Achieve a highscore of 5 to unlock",
  "Hard is locked": "Achieve a highscore of 10 to unlock"
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

else if (localStorage.getItem("highscore") == "20" && !localStorage.getItem("quantum-mechanics")) {
  triggerAchievement("You should be doing quantum mechanics by now");

  localStorage.setItem("quantum-mechanics", true);
}

else if (localStorage.getItem("highscore") == "69") {
  triggerAchievement("Nice");

  localStorage.setItem("nice", true);
}

else if (localStorage.getItem("highscore") == "69420") {
  triggerAchievement("Cheater");

  localStorage.setItem("cheater", true);
}

function start() {
  document.getElementById("bottom-card").style.animation = "1s slide-out ease-in both";

  setTimeout(() => {
    document.getElementById("/").style.animation = "1s slide-out ease-in both";
    setTimeout(() => {
      document.getElementById("*").style.animation = "1s slide-out ease-in both";
      setTimeout(() => {
        document.getElementById("-").style.animation = "1s slide-out ease-in both";
        setTimeout(() => {
          document.getElementById("+").style.animation = "1s slide-out ease-in both";
          setTimeout(() => {
            document.getElementById("hard").style.animation = "1s slide-out ease-in both";
            setTimeout(() => {
              document.getElementById("medium").style.animation = "1s slide-out ease-in both";
              setTimeout(() => {
                  document.getElementById("easy").style.animation = "1s slide-out ease-in both";
                  setTimeout(() => {
                    document.getElementById("top-card").style.animation = "1s slide-out ease-in both";
                    setTimeout(() => {
                      container.style.opacity = "0";
                      container.classList.add("absolute-centre");
                    }, 1000);
                  }, 100);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
      }, 100);
    }, 100);
  }, 100);

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
  }, 2500);
}

function ask() {
  document.getElementById("input").value = "";

  let max;

  if (localStorage.getItem("difficulty") == "easy") {
    max = 5;
  }

  else if (localStorage.getItem("difficulty") == "medium") {
    max = 10;
  }

  if (localStorage.getItem("difficulty") == "hard") {
    max = 25;
  }

  const num1 = Math.floor(Math.random() * max);
  const num2 = Math.floor(Math.random() * max);

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

    document.getElementById("question").innerText = `${num1} × ${num2}`;
  }

  else if (operator == "/") {
    answer = num1 / num2;

    document.getElementById("question").innerText = `${num1} ÷ ${num2}`;
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
      localStorage.setItem("doing-well", true);
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
  document.getElementById("bottom-card").style.animation = "1s slide-out ease-in both";

  setTimeout(() => {
    document.getElementById("/").style.animation = "1s slide-out ease-in both";
    setTimeout(() => {
      document.getElementById("*").style.animation = "1s slide-out ease-in both";
      setTimeout(() => {
        document.getElementById("-").style.animation = "1s slide-out ease-in both";
        setTimeout(() => {
          document.getElementById("+").style.animation = "1s slide-out ease-in both";
          setTimeout(() => {
            document.getElementById("hard").style.animation = "1s slide-out ease-in both";
            setTimeout(() => {
              document.getElementById("medium").style.animation = "1s slide-out ease-in both";
              setTimeout(() => {
                  document.getElementById("easy").style.animation = "1s slide-out ease-in both";
                  setTimeout(() => {
                    document.getElementById("top-card").style.animation = "1s slide-out ease-in both";
                    setTimeout(() => {
                      location.href = "reset.html";
                    }, 1000);
                  }, 100);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
      }, 100);
    }, 100);
  }, 100);
}

function setOperator(newOperator) {
  operator = newOperator;

  localStorage.setItem("operator", operator);

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

function setDifficulty(newDifficulty) {
  difficulty = newDifficulty;

  localStorage.setItem("difficulty", difficulty);

  document.getElementById(difficulty).style.backgroundColor = "rgba(0, 89, 255, 0.5)";

  if (difficulty != "easy") {
    document.getElementById("easy").style.backgroundColor = "rgba(0, 89, 255, 0.25)";
  }

  if (difficulty != "medium") {
    document.getElementById("medium").style.backgroundColor = "rgba(0, 89, 255, 0.25)";
  }

  if (difficulty != "hard") {
    document.getElementById("hard").style.backgroundColor = "rgba(0, 89, 255, 0.25)";
  }

  if (localStorage.getItem("highscore") < 5) {  
    lockDifficulty("medium");
    lockDifficulty("hard");
  }
  
  else if (localStorage.getItem("highscore") < 10) {  
    lockDifficulty("hard");
  }
}

function lockDifficulty(difficulty) {
  document.getElementById(difficulty).style.backgroundColor = "rgb(25, 25, 25)";
  document.getElementById(difficulty).style.cursor = "url(https://linfindel.github.io/nadircss/cursors/normal-select.cur), auto";
  document.getElementById(difficulty).onclick = "";

  document.getElementById(difficulty).addEventListener("click", () => { showLockedTooltip(difficulty) });
}

function showLockedTooltip(difficulty) {
  triggerAchievement(`${titleCase(difficulty)} is locked`);
}

function titleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function triggerAchievement(achievement) {
  const achievementTitle = achievement;

  let icon;

  if (achievementTitle.includes("locked")) {
    icon = "lock";
  }

  else {
    icon = "trophy";
  }

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
    <h1 style="font-size: 5rem;" class="material-symbols-rounded">${icon}</h1>

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

function openAchievements() {
  document.getElementById("bottom-card").style.animation = "1s slide-out ease-in both";

  setTimeout(() => {
    document.getElementById("/").style.animation = "1s slide-out ease-in both";
    setTimeout(() => {
      document.getElementById("*").style.animation = "1s slide-out ease-in both";
      setTimeout(() => {
        document.getElementById("-").style.animation = "1s slide-out ease-in both";
        setTimeout(() => {
          document.getElementById("+").style.animation = "1s slide-out ease-in both";
          setTimeout(() => {
            document.getElementById("hard").style.animation = "1s slide-out ease-in both";
            setTimeout(() => {
              document.getElementById("medium").style.animation = "1s slide-out ease-in both";
              setTimeout(() => {
                  document.getElementById("easy").style.animation = "1s slide-out ease-in both";
                  setTimeout(() => {
                    document.getElementById("top-card").style.animation = "1s slide-out ease-in both";
                    setTimeout(() => {
                      location.href = "achievements.html";
                    }, 1000);
                  }, 100);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
      }, 100);
    }, 100);
  }, 100);
}

function openAbout() {
  document.getElementById("bottom-card").style.animation = "1s slide-out ease-in both";

  setTimeout(() => {
    document.getElementById("/").style.animation = "1s slide-out ease-in both";
    setTimeout(() => {
      document.getElementById("*").style.animation = "1s slide-out ease-in both";
      setTimeout(() => {
        document.getElementById("-").style.animation = "1s slide-out ease-in both";
        setTimeout(() => {
          document.getElementById("+").style.animation = "1s slide-out ease-in both";
          setTimeout(() => {
            document.getElementById("hard").style.animation = "1s slide-out ease-in both";
            setTimeout(() => {
              document.getElementById("medium").style.animation = "1s slide-out ease-in both";
              setTimeout(() => {
                  document.getElementById("easy").style.animation = "1s slide-out ease-in both";
                  setTimeout(() => {
                    document.getElementById("top-card").style.animation = "1s slide-out ease-in both";
                    setTimeout(() => {
                      location.href = "about.html";
                    }, 1000);
                  }, 100);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
      }, 100);
    }, 100);
  }, 100);
}

function cheat() {
  localStorage.setItem("answered-question", true);
  localStorage.setItem("doing-well", true);
  localStorage.setItem("arithmetic-god-triggered", true);
  localStorage.setItem("quantum-mechanics", true);
  localStorage.setItem("nice", true);
  localStorage.setItem("cheater", true);
}

document.getElementById(difficulty).style.backgroundColor = "rgba(0, 89, 255, 0.5)";

if (difficulty != "easy") {
  document.getElementById("easy").style.backgroundColor = "rgba(0, 89, 255, 0.25)";
}

if (difficulty != "medium") {
  document.getElementById("medium").style.backgroundColor = "rgba(0, 89, 255, 0.25)";
}

if (difficulty != "hard") {
  document.getElementById("hard").style.backgroundColor = "rgba(0, 89, 255, 0.25)";
}

if (localStorage.getItem("highscore") < 5) {
  setDifficulty("easy");

  lockDifficulty("medium");
  lockDifficulty("hard");
}

else if (localStorage.getItem("highscore") < 10) {
  setDifficulty("medium");

  lockDifficulty("hard");
}

else if(localStorage.getItem("highscore") >= 10) {
  setDifficulty("hard");
}

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

setInterval(() => {
  if (window.innerHeight < document.getElementById("container").offsetHeight) {
    document.getElementById("container").classList.remove("absolute-centre");
  }
  
  else {
    document.getElementById("container").classList.add("absolute-centre");
  }
});
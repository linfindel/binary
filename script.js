const container = document.getElementById("container");
let score = 0;
let answer;
let operator = "+";

document.getElementById("highscore").innerText = `Highscore: ${localStorage.getItem("highscore") || 0}`;

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
    ask();
    
    score++;
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
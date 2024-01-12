if (localStorage.getItem("answered-question")) {
  document.getElementById("baby-steps").style.backgroundImage = "linear-gradient(45deg, rgba(241, 168, 241, 0.5), rgba(0, 213, 255, 0.5))";
}

if (localStorage.getItem("doing-well")) {
  document.getElementById("doing-well").style.backgroundImage = "linear-gradient(45deg, rgba(0, 89, 255, 0.25), rgba(0, 255, 0, 0.25))";
}

if (localStorage.getItem("arithmetic-god-triggered")) {
  document.getElementById("arithmetic-god").style.backgroundImage = "linear-gradient(45deg, rgba(197, 21, 0, 0.25), rgba(255, 0, 255, 0.25))";
}

if (localStorage.getItem("quantum-mechanics")) {
  document.getElementById("quantum-mechanics").style.backgroundImage = "linear-gradient(45deg, rgba(255, 0, 255, 0.25), rgba(0, 0, 255, 0.25))";
}

if (localStorage.getItem("nice")) {
  document.getElementById("nice").style.backgroundImage = "url(https://i.pinimg.com/originals/8a/39/03/8a390326148f845c0e26c23d56b7fde9.gif)";
}

if (localStorage.getItem("cheater")) {
  document.getElementById("cheater").style.backgroundImage = "url(https://i.pinimg.com/originals/8a/39/03/8a390326148f845c0e26c23d56b7fde9.gif)";
}

document.body.scrollTop = document.documentElement.scrollTop = 0;

function back() {
  document.getElementById("cheater").style.animation = "1s slide-out ease-in both";

  setTimeout(() => {
    document.getElementById("nice").style.animation = "1s slide-out ease-in both";
    setTimeout(() => {
      document.getElementById("quantum-mechanics").style.animation = "1s slide-out ease-in both";
      setTimeout(() => {
        document.getElementById("arithmetic-god").style.animation = "1s slide-out ease-in both";
        setTimeout(() => {
          document.getElementById("doing-well").style.animation = "1s slide-out ease-in both";
          setTimeout(() => {
            document.getElementById("baby-steps").style.animation = "1s slide-out ease-in both";
            setTimeout(() => {
              document.getElementById("achievements-card").style.animation = "1s slide-out ease-in both";
              setTimeout(() => {
                  document.getElementById("back").style.animation = "1s slide-out ease-in both";
                  setTimeout(() => {
                    location.href = '.';
                  }, 1000);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
    }, 100);
  }, 100);
}
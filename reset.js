function proceedTo(action) {
    if (action == "reset") {
        document.getElementById("cancel").style.animation = "1s slide-out ease-in both";

        setTimeout(() => {
            document.getElementById("reset").style.animation = "1s slide-out ease-in both";
            setTimeout(() => {
                document.getElementById("top-card").style.animation = "1s slide-out ease-in both";

                setTimeout(() => {
                    localStorage.clear();
                    location.href = ".";
                }, 1000);
            }, 100);
        }, 100);
    }

    else if (action == "cancel") {
        document.getElementById("cancel").style.animation = "1s slide-out ease-in both";

        setTimeout(() => {
            document.getElementById("reset").style.animation = "1s slide-out ease-in both";
            setTimeout(() => {
                document.getElementById("top-card").style.animation = "1s slide-out ease-in both";

                setTimeout(() => {
                    location.href = ".";
                }, 1000);
            }, 100);
        }, 100);
    }
  }
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

setInterval(() => {
    if (window.innerHeight > window.innerWidth) {
        document.getElementById("reset").classList.remove("card-error-flat-bottom-left-alt");
        document.getElementById("reset").classList.add("card-error-flat");
    
        document.getElementById("cancel").classList.remove("card-error-flat-bottom-right-alt");
        document.getElementById("cancel").classList.add("card-error-flat-top");
    } 

    else {
        document.getElementById("reset").classList.add("card-error-flat-bottom-left-alt");
        document.getElementById("reset").classList.remove("card-error-flat");
    
        document.getElementById("cancel").classList.add("card-error-flat-bottom-right-alt");
        document.getElementById("cancel").classList.remove("card-error-flat-top");
    }
});
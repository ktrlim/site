function toggleMenu() {
    const menu = document.querySelector(".menulinks");
    const icon = document.querySelector(".hamburgericon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// sets the interval to change the artist photo that is displayed
// starts the timer for the window
function startTimer()
{
   var interval = setInterval('wink()', 3000);
}

// changes the artist photo displayed
function wink()
{
    var img = document.getElementById("wink");
    if (img.src.endsWith("about1.PNG")) {
        img.src = "./assets/about2.PNG";
    } else {
        img.src = "./assets/about1.PNG";
    }
}
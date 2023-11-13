var countDownDate = new Date("Nov 3,2023 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var timeLeft = countDownDate - now;

    if (timeLeft <= 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00  :";
        document.getElementById("minutes").innerHTML = "00  :";
        document.getElementById("seconds").innerHTML = "00";
        // Display "The fest is live" text
        document.getElementById("festLiveText").textContent = "We will be back!!";
        document.querySelector(".countdown").style.display = "none";
        // Add the "fest-live" class to elements you want to style differently
        var elementsToStyle = document.querySelectorAll(".fest-live-target");
        elementsToStyle.forEach(function (element) {
            element.classList.add("fest-live");
        });
    } else {
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        var formattedDays = (days < 10) ? "0" + days : days;
        var formattedHours = (hours < 10) ? "0" + hours : hours;
        var formattedMinutes = (minutes < 10) ? "0" + minutes : minutes;
        var formattedSeconds = (seconds < 10) ? "0" + seconds : seconds;

        document.getElementById("days").innerHTML = formattedDays;
        document.getElementById("hours").innerHTML = formattedHours;
        document.getElementById("minutes").innerHTML = formattedMinutes;
        document.getElementById("seconds").innerHTML = formattedSeconds;
    }
}, 1000);






const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


var currentPage = window.location.href;
var navLink= document.querySelectorAll('.nav-menu a');

navLink.forEach(function(link) {
    if (link.href === currentPage) {
        link.classList.add('active');
    }
});

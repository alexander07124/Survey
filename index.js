const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";
});

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Hide the popup initially
popup.style.display = "none";

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("myAudio");
    audio.volume = 1.0; // Set volume to max
    audio.play().catch(error => console.log("Autoplay blocked, user interaction needed."));
});
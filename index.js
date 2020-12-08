document.querySelectorAll(".drum").forEach(drumSetPiece => {
    drumSetPiece.addEventListener("click", function () {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    });
});
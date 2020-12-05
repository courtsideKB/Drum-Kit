document.querySelectorAll(".drum").forEach(drumSetPiece => {
    drumSetPiece.addEventListener("click", function () {
        alert("I got clicked")
    });
});
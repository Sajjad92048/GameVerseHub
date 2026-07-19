function showMessage() {
    document.getElementById("result").innerHTML =
    "🎉 Welcome to GameVerse Hub!";
}

// Play Button
const buttons = document.querySelectorAll(".game-card button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        alert("🎮 Opening Game...");
    });
});

// Search Function
function searchGames() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("game-card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (title.indexOf(input) > -1) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Open Game
function openGame(gameName) {
    alert("🎮 Welcome to " + gameName + "!\n\nEnjoy Gaming on GameVerse Hub.");
}
// Loading Screen

window.onload = function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 2000);
};
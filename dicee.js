// Generate random numbers between 1 and 6 for each dice
var randomDicee1 = Math.floor(Math.random() * 6) + 1;
var randomDicee2 = Math.floor(Math.random() * 6) + 1;

// Update the images based on the random numbers
document.querySelector("img.img1").setAttribute("src", "images/dice" + randomDicee1 + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomDicee2 + ".png");

// Update the heading based on the comparison of the two random numbers
if (randomDicee1 > randomDicee2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomDicee1 < randomDicee2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

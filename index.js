var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src" , "./images/dice" + randomNumber1 + ".png")


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomimg = "dice" + randomNumber2 + ".png";
var randomimgsource = "./images/" + randomimg;
document.querySelector(".img2").setAttribute("src" , randomimgsource);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins"
} else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw!"
} else {
    document.querySelector("h1").textContent = "Player 2 Wins"
}
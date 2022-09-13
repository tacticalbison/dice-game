let randomNumber1 = Math.floor(Math.random() * 6) + 1;
document
  .getElementsByClassName("img1")[0]
  .setAttribute("src", `/images/dice${randomNumber1}.png`);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document
  .getElementsByClassName("img2")[0]
  .setAttribute("src", `/images/dice${randomNumber2}.png`);

randomNumber1 > randomNumber2
  ? (document.querySelector("h1").innerHTML = "Player 1 Wins!")
  : (document.querySelector("h1").innerHTML = "Player 2 Wins!");
if (randomNumber1 === randomNumber2)
  document.querySelector("h1").innerHTML = "Tie!";

let numOfHeads = 0;
let numOfTails = 0;
let TotalFlips = 0;
let pennyResult = null;
let percentageOfHeads = 0;
let percentageOfTails = 0;
let result = '';

let flipPennyButton = document.querySelector("#flip");
let clearButton = document.querySelector("#clear");
let pennyImage = document.querySelector("#penny-image");
let statusMessage = document.querySelector(".message-container");

document.addEventListener("DOMContentLoaded", function () {


  flipPennyButton.addEventListener("click", function () {
    // Flip Button Click Handler
    // HEADS = 1 AND TAILS = 0

    pennyResult = Math.round(Math.random() * 1); //  1 or 0

    // HEADS
    if (pennyResult === 1) {
      pennyImage.setAttribute("src", "./assets/images/penny-heads.jpg");
      pennyImage.setAttribute("alt", "a picture of heads on a penny");
      numOfHeads++;
      TotalFlips++;
      statusMessage.textContent = "You flipped Heads!";
      document.querySelector("#heads").textContent = numOfHeads
    }
    // TAILS
    else {
      pennyImage.setAttribute("src", "./assets/images/penny-tails.jpg");
      pennyImage.setAttribute("alt", "a picture of tails on a penny");
      numOfTails++;
      TotalFlips++;
      statusMessage.textContent = "You flipped Tails!";
      document.querySelector("#tails").textContent = numOfTails
    }

    console.log("numOfHeads", numOfHeads);
    console.log("numOfTails", numOfTails);
    console.log("TotalFlips", TotalFlips);





   

    percentageOfHeads = Math.round((numOfHeads / TotalFlips) * 100);
    document.querySelector("#heads-percent").textContent = percentageOfHeads + "%";

    percentageOfTails = Math.round((numOfTails / TotalFlips) * 100);
    document.querySelector("#tails-percent").textContent = percentageOfTails + "%";



    console.log("percentageOfHeads", percentageOfHeads);
    console.log("percentageOfTails", percentageOfTails);
  });

 
  clearButton.addEventListener("click", function () {
    // Clear Button Click Handler
    // TODO: Reset global variables to 0
    numOfHeads = 0;
    numOfTails = 0;
    TotalFlips = 0;
    percentageOfHeads = 0;
    percentageOfTails = 0;
    pennyResult = null;
    pennyImage.setAttribute("src", "./assets/images/penny-heads.jpg");

    document.querySelector("#tails").textContent = numOfTails;
    document.querySelector("#heads").textContent = numOfHeads;

    document.querySelector("#heads-percent").textContent = percentageOfHeads + "%";
    document.querySelector("#tails-percent").textContent = percentageOfTails + "%";


    console.log("numOfHeads", numOfHeads);
    console.log("numOfTails", numOfTails);
    console.log("TotalFlips", TotalFlips);
    console.log("percentageOfHeads", percentageOfHeads);
    console.log("percentageOfTails", percentageOfTails);

  });
});










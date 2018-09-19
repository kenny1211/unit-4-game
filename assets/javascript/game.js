$(document).ready(function() {
// variables: wins, losses, total, computer number, crystal number
var wins = 0;
var losses = 0;
var total = 0;
var compNum = Math.floor(Math.random() * 120) + 1;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

//write everything to page
$("#winsTotal").text(wins);
$("#lossesTotal").text(losses);
$("#compTotal").text(compNum);
$("#userTotal").text(total);

// function to reset game (random computer total and randomize crystal numbers; then wrtie to HTML)
function reset(){
  compNum = Math.floor(Math.random() * 120) + 1;
  $("#compTotal").html(compNum);

  total = 0;
  $("#userTotal").html(total);

  crystal1 = Math.floor(Math.random() * 12) + 1;
  crystal2 = Math.floor(Math.random() * 12) + 1;
  crystal3 = Math.floor(Math.random() * 12) + 1;
  crystal4 = Math.floor(Math.random() * 12) + 1;

  $("#winsTotal").text(wins);
  $("#lossesTotal").text(losses);
  
};



//bind clicks to crystals
$("#crystalOne").on("click", function() {
  total += crystal1;
  $("#userTotal").text(total);
  game();
  console.log(this);
});

$("#crystalTwo").on("click", function() {
  total += crystal2;
  $("#userTotal").text(total);
  game();
  console.log(this);
});

$("#crystalThree").on("click", function() {
  total += crystal3;
  $("#userTotal").text(total);
  game();
  console.log(this);
});

$("#crystalFour").on("click", function() {
  total += crystal4;
  $("#userTotal").text(total);
  game();
  console.log(this);
});

//game parameters
function game(){
if (total === compNum) {
  wins++;
  alert("You Win!");
  reset();
} else if (total > compNum){
  losses++;
  alert("You Lose!");
  reset();
};
};

//console logs
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
console.log(compNum);
});






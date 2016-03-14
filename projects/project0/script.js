//Tic Tac Toe

function startGame() {
  document.turn = "X";
  setMessage(document.turn + " gets to start.");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(square) {
  square.innerText = document.turn;
  nextTurn();
}

function nextTurn() {
  if (document.turn == "X") {
    document.turn = "O";
  } else {
    document.turn = "X"
  }
}

var grid;
var player;
var winConditions = [[0,1,2], [3,4,5], [6,7,8],
                [0,3,6], [1,4,7], [2,5,8],
                [0,4,8], [6,4,2]]
var turn = 'X';
var score = {
  'X' = 0,
  'O' = 0
}
var gridValue = 0;

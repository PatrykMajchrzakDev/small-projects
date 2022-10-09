let boxContainers = Array.from(document.querySelectorAll(".box"));

ticTacToe = {
  winningConditions: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ],
  turn: 1,
  markSquare: function (click) {
    if (this.turn === 1) {
      click.target.style.backgroundColor = "blue";
      this.turn = 2;
    } else {
      console.log(this.turn);
      click.target.style.backgroundColor = "red";
      this.turn = 1;
    }
  },
  //tracking player turns and tiles

  //toggle method - tracks turn, renders 'x' or 'o' to HTML, ensures 'x' or 'o' removed from HTML div class lists

  ////setting variables
  ////    checking that classList is empty, that it's player 1's turn and no winner
  ////blocks from allowing multiple selections on a tile
  ////allows player1 to choose tile and changes class to 'x' allowing img to display
  ////assigns tiles to player1 selections; to be compared to winning combinations
  ////check if you won!
  ////switch counter to player 2 turn
  ////      else of glownego if player 2's turn
  ////to samo co wczesniej, ale dla player2

  //reset function to clear the board

  //check win function to compare player state array with winning combinations

  //adding event listeners to each tile; at the bottom as it uses the object
  //add eventlistener to the reset button
};
boxContainers.forEach((box) =>
  box.addEventListener("click", ticTacToe.markSquare.bind(ticTacToe))
);

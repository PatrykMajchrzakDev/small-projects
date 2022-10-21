let boxContainers = Array.from(document.querySelectorAll(".box"));
document.querySelector("h2").innerText = "Player 1 turn";

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
  player1: [],
  player2: [],

  turn: 1,
  markSquare: function (click) {
    //checks whose turn
    if (this.turn === 1) {
      //change bg img when clicked
      if (click.target.style.backgroundImage === "") {
        click.target.style.backgroundImage = "url(img/cross2.png)";

        //get position of clicked element and put it into player1 array
        this.getPositionOfClickedSquare(click);

        //changes turn to 2
        this.turn = 2;
        document.querySelector("h2").innerText = "Player 2 turn";

        //checks if won
        if (this.checkForWin(this.player1)) {
          alert("Player 1 won");
          //reset stuff if won
          this.reset();
        }
      } else {
        alert("Cant use this one");
      }
    } else {
      //change bg img when clicked
      if (click.target.style.backgroundImage === "") {
        click.target.style.backgroundImage = "url(img/circle2.png)";

        //get position of clicked element and put it into player1 array
        this.getPositionOfClickedSquare(click);

        //changes turn to 1
        this.turn = 1;
        document.querySelector("h2").innerText = "Player 1 turn";

        //checks if won
        if (this.checkForWin(this.player2)) {
          alert("Player 2 won");
          //reset stuff if won
          this.reset();
        }
      } else {
        alert("Cant use this one");
      }
    }
  },
  reset: function () {
    this.player1 = [];
    this.player2 = [];
    this.turn = 1;
    boxContainers.forEach((box) => (box.style.backgroundImage = ""));
    document.querySelector("h2").innerText = "Player 1 turn";
  },

  checkForWin: function (player) {
    player.sort();
    for (condition of this.winningConditions) {
      if (condition.join("") == player.join("")) {
        return true;
      }
    }
  },
  getPositionOfClickedSquare: function (click) {
    let target = click.target.classList;
    switch (true) {
      case target.contains("box1"):
        if (this.turn === 1) {
          this.player1.push(1);
        } else {
          this.player2.push(1);
        }
        break;
      case target.contains("box2"):
        if (this.turn === 1) {
          this.player1.push(2);
        } else {
          this.player2.push(2);
        }
        break;
      case target.contains("box3"):
        if (this.turn === 1) {
          this.player1.push(3);
        } else {
          this.player2.push(3);
        }
        break;
      case target.contains("box4"):
        if (this.turn === 1) {
          this.player1.push(4);
        } else {
          this.player2.push(4);
        }
        break;
      case target.contains("box5"):
        if (this.turn === 1) {
          this.player1.push(5);
        } else {
          this.player2.push(5);
        }
        break;
      case target.contains("box6"):
        if (this.turn === 1) {
          this.player1.push(6);
        } else {
          this.player2.push(6);
        }
        break;
      case target.contains("box7"):
        if (this.turn === 1) {
          this.player1.push(7);
        } else {
          this.player2.push(7);
        }
        break;
      case target.contains("box8"):
        if (this.turn === 1) {
          this.player1.push(8);
        } else {
          this.player2.push(8);
        }
        break;
      case target.contains("box9"):
        if (this.turn === 1) {
          this.player1.push(9);
        } else {
          this.player2.push(9);
        }
        break;
    }
  },
};
boxContainers.forEach((box) =>
  box.addEventListener("click", ticTacToe.markSquare.bind(ticTacToe))
);

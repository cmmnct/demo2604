import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent implements OnInit {
  fieldSize = 9;
  fieldArray: number[] = [];
  winningCombinations: Array<number[]> = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  playerO = new Player('playerO', [], 0);
  playerX = new Player('playerX', [], 0);
  currentPlayer?: Player;
  fieldClass: string = 'field';

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.fieldSize; i++) {
      this.fieldArray.push(i + 1);
    };
    if (this.currentPlayer) {
      this.togglePlayer();
      console.log('player toggled');
    } else {
      this.currentPlayer = Math.random() > 0.5 ? this.currentPlayer = this.playerO : this.currentPlayer = this.playerX;
      this.fieldClass = `field ${this.currentPlayer.name}`;
    }
    console.log(this.currentPlayer);

  }

  togglePlayer() {
    switch (this.currentPlayer) {
      case this.playerO:
        this.currentPlayer = this.playerX;
        this.fieldClass = `field ${this.currentPlayer.name}`;
        break;
      case this.playerX:
        this.currentPlayer = this.playerO;
        this.fieldClass = `field ${this.currentPlayer.name}`;
        break;
    }
  }
}

export class Player {
  constructor(public name:string, public clickedPositions:number[], public score:number) {
  }
}
import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../data/game';
import { GAMES } from '../data/data-games';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  games =  GAMES;
  @Input() game!: Game;
  constructor() { }

  ngOnInit(): void {
  }

}

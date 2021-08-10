import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Game } from '../data/game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

  @Input() game!: (Game); 

  constructor() { }

  ngOnInit(): void {
  }
  
}

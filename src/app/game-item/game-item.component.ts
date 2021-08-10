import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Game } from '../data/game';
import { GetGameService } from '../get-game.service';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

  @Input() game!: (Game); 

  constructor(private getGameService:GetGameService) { }

  selectedGame(){
    console.log(this.game);
    
    this.getGameService.trigerGame.emit({
      game:this.game
    })
  }

  ngOnInit(): void {
  }
  
}

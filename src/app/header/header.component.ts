import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { GamesService } from '../services/games.service';
import { Game } from '../data/game';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  topGames!: Array<Game>;

  constructor(
    private gamesService : GamesService,
    private config:NgbCarouselConfig,
    ) { }
  
  ngOnInit(): void {
    this.getTopGames();
    console.log(this.topGames);
    
  }
  getTopGames() : void {
    this.topGames = this.gamesService.getGameByTop()
    console.log(this.topGames);
    
  }

}

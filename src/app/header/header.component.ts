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
    private config : NgbCarouselConfig,
    ){
      config.showNavigationArrows = false
     }
  
  ngOnInit(): void {
    this.topGames = this.gamesService.getGameByTop()
  }
}

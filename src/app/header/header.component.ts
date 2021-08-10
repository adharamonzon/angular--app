import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Game } from '../data/game';
import { TopGamesService } from '../services/top-games.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  games!: Game[];
  
  constructor(
    private config:NgbCarouselConfig,
    private topGameService:TopGamesService,
    ) { }

  ngOnInit(): void {
    this.getGames();
  }
  getGames(): void { 
    this.games = this.topGameService.getTopGames()
  }

}

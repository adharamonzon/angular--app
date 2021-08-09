import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../data/game';
import { GAMES } from '../data/data-games';
//Routing
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
/* import { GameService } from '../game.service'; */

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public game?: Game;
  games = GAMES;
  

  constructor(
    private route:ActivatedRoute,/* 
    private gameService: GameService,  */
    private location: Location
  ) { }
 
  ngOnInit(): void {
    let id: number = parseInt(this.route.snapshot.params.id)
    console.log(id, this.games);
    
    for (const game of this.games) {
      if(game.id === id){
        this.game = game
      }
    }
    console.log(this.game);
  }
  goBack() : void {
    this.location.back()
  }
}
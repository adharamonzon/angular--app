import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../data/game';
import { GAMES } from '../data/data-games';
//Routing
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GetGameService } from '../get-game.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public game?: Game;
  //games = GAMES;
  
  constructor(
    //private route:ActivatedRoute, //usar la ruta para encontrar el id clickado
    private getGameService:GetGameService,
    private location: Location
  ) { }
 
  ngOnInit(): void {
    //SIN UTILIZAR SERVCIO PARA PINTAR EL DETALLE
    /* let id: number = parseInt(this.route.snapshot.params.id)
    for (const game of this.games) {
      if(game.id === id){
        this.game = game
      }
    } */
    this.getGameService.trigerGame.subscribe(data => {
      this.game = data.game
      console.log(this.game);
      
    })
  }
    
  goBack() : void {
    this.location.back()
  }
}
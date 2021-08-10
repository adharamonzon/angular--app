import { Component, OnInit } from '@angular/core';

import { Game } from '../data/game';
//import { GAMES } from '../data/data-games'; //necesario si no hay servicio
//servicio: para acceder al data 
import { GameService } from '../games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  //games: Game[] = GAMES; //se iguala lo que definimos games, a nuestro array importado de data, que tiene forma de array (cada item del array sera un game)
  games!: Game[];
  constructor(private gameService : GameService) {} //de esta manera inyectamos el servicio a nuestro gameService
  
  ngOnInit(): void {
    this.getGames() //al llamar la f(x) aqui, se ejecuta despues de que el componete se haya creado. 
  }
  getGames(): void { 
    this.games = this.gameService.getGames()
  }
}
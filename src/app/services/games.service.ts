import { Injectable } from '@angular/core';

import { Game } from '../data/game';
import { GAMES } from '../data/data-games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }
  
  getGameById(id:number) : Game | null {
   for (const game of GAMES) {
      if(game.id === id){
        return game; 
      }
   }
   
   return null;
  } 

  getGames() : Game[]{
    return GAMES;
  }
//se guarda en el servicio el array de juegos, para que cualquier archivo de la applicacion pueda acceder a ellos. 
//ProvidedIn:'root' lo aplica a la raiz del proyecto y por ello se puede acceder desde cualquier punto de la aplicacion.    
}

// detail.component.ts

// this.game = this.gameService.getGameById(parseInt(this.route.snapshot.params.id))
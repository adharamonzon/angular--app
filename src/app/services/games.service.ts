import { Injectable } from '@angular/core';

import { Game } from '../data/game';
import { GAMES } from '../data/data-games';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames() : Game[]{
    return GAMES;
  }
  
//se guarda en el servicio el array de juegos, para que cualquier archivo de la applicacion pueda acceder a ellos. 
//ProvidedIn:'root' lo aplica a la raiz del proyecto y por ello se puede acceder desde cualquier punto de la aplicacion.    
}

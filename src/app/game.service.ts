import { Injectable } from '@angular/core';

import { Game } from './data/game';
import { GAMES } from './data/data-games';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames() : Game[]{
    return GAMES;
  }
}

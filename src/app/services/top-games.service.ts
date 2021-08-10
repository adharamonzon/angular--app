import { Injectable } from '@angular/core';

import { Game } from '../data/game';
import { TopGames } from '../data/data-top-games';

@Injectable({
  providedIn: 'root'
})
export class TopGamesService {

  constructor() { }

  getTopGames() : Game[]{
    return TopGames
  }
}

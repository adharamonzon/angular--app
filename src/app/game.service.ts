import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Game } from './data/game';
import { GAMES } from './data/data-games';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGame() : Observable<Game[]>{
    return of(GAMES);
  }
}

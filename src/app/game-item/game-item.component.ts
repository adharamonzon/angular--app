import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from '../data/game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

  @Input() game!: (Game); //a traves del @Input recibe la informacion del componente madre
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onSelect(game: Game){
    this.router.navigate(['/gameDetail',game.id, game])
  }
}

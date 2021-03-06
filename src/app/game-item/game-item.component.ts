import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../data/game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

  @Input() game!: Game; //forma de pasar informacion de padres a hijos

  constructor() { }


  ngOnInit(): void {
  }
  
}

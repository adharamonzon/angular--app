import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../data/game'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() game!:Game;
  /* selectedGame?:Game; */
  constructor() { }

  /* onSelect(game: Game) : void {
    this.selectedGame = game;
  } */

  ngOnInit(): void {
  }

}/* porque si pongo una exclamacion funciona? */
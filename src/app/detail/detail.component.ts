import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../data/game';
//Routing
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../game.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() game?: Game[]; 
  
  constructor(
    private route:ActivatedRoute,/* 
    private gameService: GameService,
    private location: Location  */
  ) { }
 
  ngOnInit(): void {
    this.getGame();
  }

  getGame() : void {
    const id = Number(console.log(this.route.snapshot.params.id));

  }
}
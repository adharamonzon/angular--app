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
  /*game: Game[] = [];
  game:Game; */ /* siemmpre problemas al declara game o games  */
  @Input() game?: Game[];
  
  constructor(
    private route:ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }

  getGame(): void{
  let id:number = this.route.snapshot.params.id;
    this.gameService.getGame(id)
      .subscribe(game => this.game = game)
  }

  ngOnInit(): void {
    this.getGame();
  }
}/* porque si pongo una exclamacion en '@Input() game!' funciona? */
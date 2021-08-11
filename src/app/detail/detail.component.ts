import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../data/game';
import { GAMES } from '../data/data-games';
//Routing
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public game?: Game | null; //puede devolver nada porque no se haya seleccionado ningun elemento, hay que tipar tambien con null
  
  constructor(
    private route:ActivatedRoute, //usar la ruta para encontrar el id clickado
    private gamesService:GamesService,
    private location: Location
  ) { }
 
  ngOnInit(): void {
   this.game = this.gamesService.getGameById(parseInt(this.route.snapshot.params.id))
  }
    
  goBack() : void {
    this.location.back()
  }
}
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Game } from '../data/game';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  games!: Game[];
  
  constructor(
    private config:NgbCarouselConfig,
    ) { }

  ngOnInit(): void {
    this.getGames();
  }
  getGames(): void { 
  }

}

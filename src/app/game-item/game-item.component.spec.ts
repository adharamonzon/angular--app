import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { GameItemComponent } from "./game-item.component";
import { GamesService } from '../services/games.service';


describe('game-item component', () =>{
  let component: GameItemComponent;
  let fixture: ComponentFixture<GameItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[],
      declarations: [],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(GameItemComponent);
    component = fixture.componentInstance; //con el fixture traemos el componente que vamos a testear y luego lo instanciamos
    component.game = { id: 1, title: '', price: ''}; // input mock
    fixture.detectChanges();
  })
  
  it('should create game-item component', () => {
    expect(component).toBeTruthy();
  }) 
})
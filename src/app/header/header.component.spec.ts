import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from "./header.component"
import { GamesService } from '../services/games.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Game } from '../data/game';

const games : Game[] = []

describe('header component', () =>{
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        NgbModule
      ],
      declarations: [
        HeaderComponent,
      ],
      providers: [
        GamesService,
        NgbCarouselConfig
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance; //con el fixture traemos el componente que vamos a testear y luego lo instanciamos
    fixture.detectChanges();
    let service = fixture.debugElement.injector.get(GamesService)
    spyOn(service, 'getGameByTop').and.callFake(() => games) //oninit
  })
  it('should create header component', () => {
    expect(component).toBeTruthy();
  })
})                                                                              
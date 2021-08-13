import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { GamesListComponent } from "./games-list.component"
import { GamesService } from '../services/games.service';

describe('game-list component', () =>{
  let component: GamesListComponent;
  let fixture: ComponentFixture<GamesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [
        GamesListComponent,
      ],
      providers: [
        GamesService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListComponent);
    component = fixture.componentInstance; //con el fixture traemos el componente que vamos a testear y luego lo instanciamos
    fixture.detectChanges();
  })
  it('should create game-list component', () => {
    expect(component).toBeTruthy();
  })
  //vamos a crear un metodo que compruebe que estamos llamando al servicio 
  it('access to service data', () => {
    const service = fixture.debugElement.injector.get(GamesService);
    const spy1 = spyOn(service, 'getGames').and.callFake(() => [])
    component.getGames();
    expect(spy1).toHaveBeenCalled()
  })
})
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { GamesListComponent } from "./games-list.component"
import { GamesService } from '../services/games.service';
import { Game } from '../data/game';

import { of } from 'rxjs';

const listGames : Game[] = [{ id: 1, title: '', price: '' }]

const GameServiceMock = {
  getGames: () => of(listGames)
} 

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
        //GamesService vamos a crear un moc, para usarlo por si el componente usara mucho metodos de este servicio
        {
          provide: GamesService,
          useValue: GameServiceMock
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListComponent);
    component = fixture.componentInstance; //con el fixture traemos el componente que vamos a testear y luego lo instanciamos
    fixture.detectChanges(); // llamada a ngOnInit()
    // let service = fixture.debugElement.injector.get(GamesService);
    // spyOn(service, 'getGames').and.callFake(() => listGames : Game[]);
  })
  it('should create game-list component', () => {
    expect(component).toBeTruthy();
  })
  //vamos a crear un metodo que tome los datos de la SUBSCRIPCION DEL OBSERVABLE
  it('get data from the subscription', () =>{
    // const gameService = fixture.debugElement.injector.get(GamesService); //traemos el servicio
    // const games : Game[] = [];
    /*const spy1 = spyOn(gameService, 'getGames').and.returnValue(of(games)) */ //no hace falta si usamos un mock
    // component.getGames();
    /* expect(spy1).toHaveBeenCalled(); *///no hace falta si usamos un mock 
    expect(component.games.length).toBe(1);
  });
  
//vamos a crear un metodo que compruebe que estamos llamando al servicio para recoger los datos
 //SIN OBSERVABLE
 /*  it('access to service data', () => {
    const games : Game[] = [];
    const service = fixture.debugElement.injector.get(GamesService);
    const spy1 = spyOn(service, 'getGames').and.callFake(() => [])
    component.getGames();
    expect(spy1).toHaveBeenCalled()
  })  */
})
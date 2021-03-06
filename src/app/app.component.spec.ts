import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
/* DEPENDENCIES */
import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';
import {GameItemComponent } from './game-item/game-item.component';
import { DetailComponent } from './detail/detail.component';
import { ButtonComponent } from './button/button.component';

describe('app component', () =>{
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        GamesListComponent,
        GameItemComponent,
        DetailComponent,
        ButtonComponent
      ],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance; //con el fixture traemos el componente que vamos a testear y luego lo instanciamos
    fixture.detectChanges();
  })
  it('should create app component', () => {
    expect(component).toBeTruthy();
  })
})
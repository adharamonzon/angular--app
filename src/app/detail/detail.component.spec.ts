import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { DetailComponent } from "./detail.component";
import { GamesService } from '../services/games.service';

describe('detail component', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        DetailComponent
      ],
      providers:[
        GamesService,
        Location
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(GamesService);
    spyOn(service, 'getGameById').and.callFake(() => null)
  });

  it('should create game-detail component', () => {
    expect(component).toBeTruthy();
  });

  it('should call the function to go back', () => {
    const spy1 = spyOn(component, 'goBack'); 
    component.goBack();
    expect(spy1).toHaveBeenCalled();
  })
});
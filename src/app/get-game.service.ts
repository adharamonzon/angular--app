import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetGameService {

  @Output() trigerGame : EventEmitter<any> = new EventEmitter();

  constructor() { }
}
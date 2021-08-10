import { Component } from '@angular/core';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(ngbConfig: NgbConfig){
    ngbConfig.animation = false;
  }
  title = 'game-app-angular';
}

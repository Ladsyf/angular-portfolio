import { Component } from '@angular/core';
import { prevComponentAnimation } from './animations';

@Component({
  selector: 'prt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [prevComponentAnimation]
})
export class AppComponent {
}

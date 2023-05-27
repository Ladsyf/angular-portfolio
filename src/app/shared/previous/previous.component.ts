import { Component, Input } from '@angular/core';

@Component({
  selector: 'prt-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.css']
})
export class PreviousComponent {
  @Input() label!: string;
}

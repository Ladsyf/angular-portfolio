import { Component, Input } from '@angular/core';

@Component({
  selector: 'prt-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css'],
})
export class NextComponent {
  @Input() label!: string;
}

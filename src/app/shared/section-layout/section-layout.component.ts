import { Component, Input } from '@angular/core';

@Component({
  selector: 'prt-section-layout',
  templateUrl: './section-layout.component.html',
  styleUrls: ['./section-layout.component.css']
})
export class SectionLayoutComponent {
  @Input() header!: string;



}

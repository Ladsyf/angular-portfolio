import { Component, Input } from '@angular/core';
import { IProject } from 'src/app/interface/iproject';

@Component({
  selector: 'prt-p-card',
  templateUrl: './p-card.component.html',
  styleUrls: ['./p-card.component.css']
})
export class PCardComponent {
  @Input() project!: IProject
}

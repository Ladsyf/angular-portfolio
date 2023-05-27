import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import {
  navBarAnimation,
  prevComponentAnimation,
  nextAnimation,
  prevAnimation,
} from '../animations';

@Component({
  selector: 'prt-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    navBarAnimation,
    prevComponentAnimation,
    nextAnimation,
    prevAnimation,
  ],
})
export class AboutMeComponent implements OnInit {
  constructor(private _nav: NavigationService) {}

  ngOnInit(): void {
    this._nav.isNext = false;
    this._nav.isOpen = true;
  }
  changePath(path: string) {
    this._nav.changePath(path);
  }

  isNext() {
    return this._nav.isNext;
  }

  isOpen() {
    return this._nav.isOpen;
  }
}

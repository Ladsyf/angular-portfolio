import { Component, OnInit } from '@angular/core';
import { navBarAnimation, prevComponentAnimation, nextAnimation, prevAnimation } from '../animations';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'prt-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    navBarAnimation,
    prevComponentAnimation,
    nextAnimation,
    prevAnimation,
  ],
})
export class ContactComponent implements OnInit{
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  navBarAnimation,
  nextAnimation,
  prevComponentAnimation,
} from 'src/app/animations';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'prt-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  animations: [nextAnimation, prevComponentAnimation, navBarAnimation],
})
export class WrapperComponent implements OnInit {
  constructor(private _nav: NavigationService) {}

  ngOnInit(): void {
    this._nav.isNext = false;
    this._nav.isOpen = true;
  }

  changePath(path: string) {
    this._nav.changePath(path);
  }

  isOpen() {
    return this._nav.isOpen;
  }

  isNext() {
    return this._nav.isNext;
  }
}

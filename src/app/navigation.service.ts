import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _isOpen = true
  private _isNext = false

  constructor(private _router: Router, private _route: ActivatedRoute){}

  set isOpen(value: boolean) {
    this._isOpen = value
  }

  get isOpen(): boolean {
    return this._isOpen
  }

  set isNext(value: boolean) {
    this._isNext = value
  }

  get isNext(): boolean {
    return this._isNext
  }

  changePath(path: string) {

    this.isOpen = !this.isOpen;
    setTimeout(() => {
      this.isNext = true;
    }, 500);
    setTimeout(() => {
      this._router.navigateByUrl(path);
    }, 1000);
  }

}

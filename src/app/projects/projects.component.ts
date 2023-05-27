import { Component, OnInit } from '@angular/core';
import {
  navBarAnimation,
  nextAnimation,
  prevAnimation,
  prevComponentAnimation,
} from '../animations';
import { IProject } from '../interface/iproject';
import { NavigationService } from '../navigation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'prt-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    navBarAnimation,
    prevComponentAnimation,
    nextAnimation,
    prevAnimation,
  ],
})
export class ProjectsComponent implements OnInit {
  constructor(private _nav: NavigationService, private _route: ActivatedRoute) {}

  projects!: IProject[]

  ngOnInit(): void {

    this.projects = this._route.snapshot.data['projectListResolve']

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

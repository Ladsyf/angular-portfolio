import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  navBarAnimation,
  prevComponentAnimation,
  nextAnimation,
  prevAnimation,
} from 'src/app/animations';
import { IProject } from 'src/app/interface/iproject';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'prt-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  animations: [
    navBarAnimation,
    prevComponentAnimation,
    nextAnimation,
    prevAnimation,
  ],
})
export class ProjectDetailsComponent implements OnInit {
  project!: IProject | undefined;
  projects!: IProject[];

  previous: number | null = null;
  next: number | null = null;

  constructor(
    private _nav: NavigationService,
    private _route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.projects = this._route.snapshot.data['projectListResolve'];
    this._route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.initFunction(Number(id));
    });
  }

  initFunction(id: number) {
    this.next = null;
    this.previous = null;
    const projectId = id;
    let pt = true;
    let nt = false;
    this.projects.map((project: IProject) => {
      if (nt) {
        this.next = project.id;
        nt = false;
      }
      if (project.id === projectId) {
        this.project = project;
        pt = false;
        nt = true;
      }
      if (pt) {
        this.previous = project.id;
      }
    });
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

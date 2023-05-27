import { Injectable } from '@angular/core';
import {
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProjectService } from './project.service';
import { IProject } from './interface/iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectListResolver implements Resolve<IProject[]> {
  constructor(private _project: ProjectService){}

  resolve(): Observable<IProject[]> {
    return this._project.show();
  }
}

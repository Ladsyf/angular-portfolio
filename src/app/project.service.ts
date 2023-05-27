import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from './interface/iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  client="http://localhost:4200"
  url="http://localhost:4200/assets/api"

  constructor(private _http: HttpClient) { }

  show(): Observable<IProject[]> {
    return this._http.get<IProject[]>(`${this.url}/project.json`);
  }

  getFileLink(path: string){
    return `${this.client}/${path}`
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISkill } from './interface/iskill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url=`assets/api`

  constructor(private _http: HttpClient) { }

  show(): Observable<ISkill[]> {
    return this._http.get<ISkill[]>(`${this.url}/skill.json`);
  }
}

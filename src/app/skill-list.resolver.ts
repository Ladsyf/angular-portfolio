import { Injectable } from '@angular/core';
import {
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ISkill } from './interface/iskill';
import { SkillService } from './skill.service';

@Injectable({
  providedIn: 'root'
})
export class SkillListResolver implements Resolve<ISkill[]> {
  constructor(private _skill: SkillService){}
  resolve(): Observable<ISkill[]> {
    return this._skill.show();
  }
}

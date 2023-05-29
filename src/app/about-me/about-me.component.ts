import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import {
  navBarAnimation,
  prevComponentAnimation,
  nextAnimation,
  prevAnimation,
} from '../animations';
import { ActivatedRoute } from '@angular/router';
import { ISkill } from '../interface/iskill';

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

  skills!: ISkill[]
  backEnd!: ISkill[]
  frontEnd!: ISkill[]
  other!: ISkill[]

  constructor(private _nav: NavigationService, private _route: ActivatedRoute) {}

  ngOnInit(): void {

    this.skills = this._route.snapshot.data['skillListResolve']

    this.frontEnd = this.skills.filter((skill:ISkill) => skill.type==="Front-end")
    this.backEnd = this.skills.filter((skill:ISkill) => skill.type==="Back-end")
    this.other = this.skills.filter((skill:ISkill) => skill.type==="Others")

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


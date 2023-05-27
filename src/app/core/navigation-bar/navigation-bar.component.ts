import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'prt-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit{
  @Input() active!: number;

  navOpen=false;
  constructor(private _theme: ThemeService, private _nav: NavigationService){}
  isDark=false;


  ngOnInit(): void {


    if(!(!!localStorage.getItem("isDark"))){
      this.isDark = true;
      this._theme.changeTheme("dark")
      localStorage.setItem("isDark", "yes")
    }
    if(localStorage.getItem("isDark") == "yes"){
      this.isDark = true;
      this._theme.changeTheme("dark")
    }

  }

  changePath(path: string){
    this._nav.changePath(path);
  }

  switchTheme(event: any){
    const checked = event.target.checked

    if(checked){
      this._theme.changeTheme("dark")
      localStorage.setItem("isDark", "yes")
    }
    else {
      this._theme.changeTheme("light")
      localStorage.setItem("isDark", "no")
    }
  }
}

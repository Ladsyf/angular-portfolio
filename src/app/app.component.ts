import { Component, OnInit } from '@angular/core';
import { prevComponentAnimation } from './animations';
import { ThemeService } from './theme.service';

@Component({
  selector: 'prt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [prevComponentAnimation]
})
export class AppComponent implements OnInit {
  constructor(private _theme: ThemeService){}
  ngOnInit(): void {
      const loader = document.getElementById('loader') as HTMLElement;

      if(localStorage.getItem("isDark") == "yes"){
        this._theme.changeTheme("dark")
      }
      loader.style.display = "flex";
      window.addEventListener("load", function() {
        loader.style.display = "none";
      })
  }
}

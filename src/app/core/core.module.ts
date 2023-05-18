import { NgModule } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class CoreModule { }

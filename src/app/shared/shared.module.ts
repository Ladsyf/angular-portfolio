import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionLayoutComponent } from './section-layout/section-layout.component';
import { PhotoTrademarkComponent } from './photo-trademark/photo-trademark.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SectionLayoutComponent,
    PhotoTrademarkComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    SectionLayoutComponent,
    PhotoTrademarkComponent,
    FormsModule
  ]
})
export class SharedModule { }

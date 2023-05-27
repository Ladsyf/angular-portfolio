import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionLayoutComponent } from './section-layout/section-layout.component';
import { PhotoTrademarkComponent } from './photo-trademark/photo-trademark.component';
import { FormsModule } from '@angular/forms';
import { NextComponent } from './next/next.component';
import { PreviousComponent } from './previous/previous.component';



@NgModule({
  declarations: [
    SectionLayoutComponent,
    PhotoTrademarkComponent,
    NextComponent,
    PreviousComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    SectionLayoutComponent,
    PhotoTrademarkComponent,
    FormsModule,
    NextComponent,
    PreviousComponent
  ]
})
export class SharedModule { }

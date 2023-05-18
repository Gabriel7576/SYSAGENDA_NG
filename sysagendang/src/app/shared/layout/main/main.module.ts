import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
  exports: [
    MainComponent
  ],
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainModule { }

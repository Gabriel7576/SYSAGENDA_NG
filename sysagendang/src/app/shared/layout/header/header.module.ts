import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
})
export class HeaderModule { }

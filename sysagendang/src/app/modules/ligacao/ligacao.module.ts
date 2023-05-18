import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { LigacaoComponent } from './ligacao.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LigacaoComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDividerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LigacaoModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AddComponent } from './add.component';
import {MatInputModule} from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [
    AddComponent
  ],
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    MatButtonModule,
    MatCardModule
  ]
})
export class AddModule { }

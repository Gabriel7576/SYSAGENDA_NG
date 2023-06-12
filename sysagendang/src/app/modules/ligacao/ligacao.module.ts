import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LigacaoComponent } from './ligacao.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CreateLigacaoComponent } from './create-ligacao/create-ligacao.component';
import { UpdateLigacaoComponent } from './update-ligacao/update-ligacao.component';
import { DeleteLigacaoComponent } from './delete-ligacao/delete-ligacao.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    LigacaoComponent,
    CreateLigacaoComponent,
    UpdateLigacaoComponent,
    DeleteLigacaoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    RouterModule,
  ]
})
export class LigacaoModule { }

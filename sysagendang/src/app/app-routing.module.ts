import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './modules/contato/contato.component';
import { HomeComponent } from './modules/home/home.component';
import { CreateContatoComponent } from './modules/contato/create-contato/create-contato.component';
import { UpdateContatoComponent } from './modules/contato/update-contato/update-contato.component';
import { DeleteContatoComponent } from './modules/contato/delete-contato/delete-contato.component';
import { LigacaoComponent } from './modules/ligacao/ligacao.component';
import { CreateLigacaoComponent } from './modules/ligacao/create-ligacao/create-ligacao.component';
import { UpdateLigacaoComponent } from './modules/ligacao/update-ligacao/update-ligacao.component';
import { DeleteLigacaoComponent } from './modules/ligacao/delete-ligacao/delete-ligacao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'contato',
    component: ContatoComponent
  }, {
    path: 'contato/create',
    component: CreateContatoComponent
  }, {
    path: 'contato/update/:codContato',
    component: UpdateContatoComponent
  }, {
    path: 'contato/delete/:codContato',
    component: DeleteContatoComponent
  }, {
    path: 'ligacao',
    component: LigacaoComponent
  }, {
    path: 'ligacao/create',
    component: CreateLigacaoComponent
  }, {
    path: 'ligacao/update/:codContato/:codLigacao',
    component: UpdateLigacaoComponent
  },{
    path: 'ligacao/delete/:codContato/:codLigacao',
    component: DeleteLigacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

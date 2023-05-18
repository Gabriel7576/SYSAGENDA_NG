import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './modules/contato/contato.component';
import { LigacaoComponent } from './modules/ligacao/ligacao.component';
import { HomeComponent } from './modules/home/home.component';
import { AddComponent } from './modules/add/add.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "home",
  },
  {
    path: "add",
    component: AddComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "contato",
    component: ContatoComponent
  },
  {
    path: "ligacao",
    component: LigacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

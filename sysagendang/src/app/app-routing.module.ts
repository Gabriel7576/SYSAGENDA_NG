import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './modules/contato/contato.component';
import { HomeComponent } from './modules/home/home.component';
import { CreateContatoComponent } from './modules/contato/create-contato/create-contato.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'home',
    component: HomeComponent
  },{
    path: 'contato',
    component: ContatoComponent
  },{
    path: 'contato/create',
    component: CreateContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

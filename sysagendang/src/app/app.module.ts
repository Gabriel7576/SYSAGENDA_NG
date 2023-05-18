import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { LigacaoModule } from './modules/ligacao/ligacao.module';
import { HeaderModule } from './shared/layout/header/header.module';
import { MainModule } from './shared/layout/main/main.module';
import { ContatoModule } from './modules/contato/contato.module';
import { AddModule } from './modules/add/add.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MainModule,
    LigacaoModule,
    ContatoModule,
    HomeModule,
    AddModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

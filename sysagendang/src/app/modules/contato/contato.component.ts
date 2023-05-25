import { ContatoService } from './contato.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Contato } from 'src/app/core/models/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contatos: Contato[] = [];

  displayedColumns = ['id', 'name', 'telefone'];

  constructor(private contatoService:ContatoService, private router: Router) {}

  ngOnInit(): void {
    this.contatoService.readContato().subscribe(contatos => {
      this.contatos = contatos;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from 'src/app/core/models/contato';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contatos: Contato[] = [];

  displayedColumns = ['codContato', 'name', 'telefone'];

  constructor(private contatoService: ContatoService, private router: Router) { }


  ngOnInit(): void {
    this.contatoService.readContato().subscribe(contatos => {
      this.contatos = contatos;
      console.log(contatos);
    })
  }

}


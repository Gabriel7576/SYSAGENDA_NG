import { Router } from '@angular/router';
import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/core/models/contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit{

  contato: Contato = {
    codContato: 0,
    nome: '',
    telefone:null
  };

  constructor(private contatoService:ContatoService, private router:Router){}

  ngOnInit(): void {}

  salvar(){
    this.contatoService.createContato(this.contato).subscribe( () => {
      this.router.navigate(['/contato']);
    })
  }

  cancel(){
    this.router.navigate(['/contato']);
  }

}

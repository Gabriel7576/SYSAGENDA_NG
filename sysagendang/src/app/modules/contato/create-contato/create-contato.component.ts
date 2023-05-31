import { UtilService } from './../../../core/services/util.service';
import { Router } from '@angular/router';
import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/core/models/contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  contato: Contato = {
    codContato: 0,
    nome: '',
    telefone: null
  };

  constructor(private contatoService: ContatoService, private router: Router, private utilService: UtilService) { }

  ngOnInit(): void { }

  salvar() {
    if (this.validaTela()) {
      
      this.contatoService.create(this.contato).subscribe(() => {
        this.router.navigate(['/contato']);
      })
    }
  }

  cancel() {
    this.router.navigate(['/contato']);
  }

  validaTela(): boolean {
    if (this.contato.nome.trim().length <= 0) {
      this.utilService.showMessage("Nome não pode estar vazio!");
      return false;
    }

    if (this.contato.telefone.toString.length > 11 ) {
      this.utilService.showMessage("Nome não pode ter mais que 11 caracteres!");
      return false;
    }

    if (this.contato.telefone <= 0) {
      this.utilService.showMessage("telefone não pode ser negativo!");
      return false;
    }

    if (this.contato.telefone == null) {
      this.utilService.showMessage("telefone não estar vazio");
    }
    
    return true;
  }

}

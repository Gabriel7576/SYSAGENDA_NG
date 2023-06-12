import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/core/services/util.service';
import { ContatoService } from '../../contato/contato.service';
import { LigacaoService } from '../ligacao.service';
import { Contato } from './../../../core/models/contato';
import { Ligacao } from './../../../core/models/ligacao';

@Component({
  selector: 'app-create-ligacao',
  templateUrl: './create-ligacao.component.html',
  styleUrls: ['./create-ligacao.component.css']
})
export class CreateLigacaoComponent implements OnInit {

  contatos: Contato[];
  ligacao: Ligacao = {
    id: {
      codContato: null,
      codLigacao: null
    },
    dataHora: null,
    observacao: ""
  };

  data: Date;
  hora: string;

  constructor(private contatoService: ContatoService, private ligacaoService: LigacaoService, private router: Router, private util: UtilService) { }

  ngOnInit(): void {
    this.contatoService.read().subscribe(contatos => {
      this.contatos = contatos;
    });
  }

  salvar(ligacao: Ligacao): void {
    if (this.verifica()) {

      this.ligacao.dataHora = new Date(this.data.getFullYear(), this.data.getMonth(), this.data.getDate(), +this.hora.split(":")[0], +this.hora.split(":")[1]);
      this.ligacaoService.create(ligacao).subscribe(() => {
        this.util.showMessage("Essa ligação foi adicionada com sucesso!");
        this.router.navigate(['/ligacao']);
      });

    }
  }

  verifica(): boolean {
    if (this.ligacao.id.codContato == null) {
      this.util.showMessage("O Codigo de Contato é obrigatorio");
      return false;
    }
    if (this.data == null) {
      this.util.showMessage("A Data é obrigatorio");
      return false;
    }
    if (this.hora == null || this.hora == "") {
      this.util.showMessage("A Hora é obrigatorio");
      return false;
    }

    return true;
  }

}

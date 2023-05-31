import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UtilService } from 'src/app/core/services/util.service';
import { Contato } from 'src/app/core/models/contato';

@Component({
  selector: 'app-update-contato',
  templateUrl: './update-contato.component.html',
  styleUrls: ['./update-contato.component.css']
})
export class UpdateContatoComponent implements OnInit {

  contato: Contato = {
    codContato: 0,
    nome: '',
    telefone: null
  }

  constructor(private contatoService: ContatoService, private utilService: UtilService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('codContato');
    this.contatoService.readById(id).subscribe(contato => {
      this.contato = contato;
    })
  }

  salvar(): void {
    this.contatoService.update(this.contato).subscribe(() => {
      this.utilService.showMessage("Produto Atualizado com Sucesso!");
      this.router.navigate(['/contato']);
    })
  }

  cancel(): void {
    this.router.navigate(['/contato']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from 'src/app/core/models/contato';
import { Ligacao } from 'src/app/core/models/ligacao';
import { UtilService } from 'src/app/core/services/util.service';
import { ContatoService } from '../../contato/contato.service';
import { LigacaoService } from '../ligacao.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-ligacao',
  templateUrl: './update-ligacao.component.html',
  styleUrls: ['./update-ligacao.component.css']
})

export class UpdateLigacaoComponent implements OnInit {

  constructor(private contatoService: ContatoService, private ligacaoService: LigacaoService, private router: Router, private route: ActivatedRoute, private util: UtilService) { }

  contato: Contato;
  ligacao: Ligacao;

  form = new FormGroup({
    id: new FormGroup({
      codContato: new FormControl<number>(null),
      codLigacao: new FormControl<number>(null)
    }),
    dataHora: new FormControl<Date>(null),
    observacao: new FormControl<string>(null),

    //POG - gambiarra oriented programming
    data: new FormControl<Date>(null, Validators.required),
    hora: new FormControl<string>(null, Validators.required)
  });

  ngOnInit(): void {

    const codContato = this.route.snapshot.paramMap.get("codContato");
    const codLigacao = this.route.snapshot.paramMap.get("codLigacao");

    this.contatoService.readById(codContato).subscribe(contato => {
      this.contato = contato;
    });

    this.ligacaoService.readById(codContato, codLigacao).subscribe(ligacao => {
      this.ligacao = ligacao;

      this.ligacao.dataHora = new Date(this.ligacao.dataHora);

      this.form.patchValue(this.ligacao);
      this.form.controls.data.patchValue(this.ligacao.dataHora);
      this.form.controls.hora.patchValue(this.util.dateToHours(this.ligacao.dataHora));
    });
  }

  salvar(ligacao: Ligacao): void {
    if (this.verificar()) {

      const data = this.form.controls.data.getRawValue();
      const hora = this.form.controls.hora.getRawValue();

      this.ligacao.dataHora = this.util.joinDatewithHours(data, hora);
      
      this.ligacaoService.create(ligacao).subscribe(() => {
        this.util.showMessage("Essa ligação foi adicionada com sucesso!");
        this.router.navigate(['/ligacao']);
      });

    }
  }

  verificar(): boolean {
    if (this.form.controls.data.invalid) {
      this.util.showMessage("A Data é obrigatorio");
      return false;
    }
    if (this.form.controls.hora.invalid) {
      this.util.showMessage("A Hora é obrigatorio");
      return false;
    }

    return true;
  }

}

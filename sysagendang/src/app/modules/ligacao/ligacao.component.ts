import { Component } from '@angular/core';

@Component({
  selector: 'cmp-ligacao',
  templateUrl: './ligacao.component.html',
  styleUrls: ['./ligacao.component.css']
})
export class LigacaoComponent {

  marcado: boolean = false;

  displayedColumns: string[] = ['codcontato', 'codLigacao', 'datahora', 'observação', 'deleta', 'alterar'];

  lista: any[] = [
    {nome: 'Isaac', idade: 25 },
    {nome: 'Isaac', idade: 25 },
    {nome: 'Isaac', idade: 25 },
    {nome: 'Isaac', idade: 25 },
  ];

}

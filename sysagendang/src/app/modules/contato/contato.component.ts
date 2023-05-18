import { Component } from '@angular/core';

@Component({
  selector: 'cmp-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  displayedColumns: string[] = ['codcontato', 'nome', 'telefone', 'deleta', 'altera'];

  lista: any[] = [
    {
      nome: "loa",
      telefone: "sdasd"
    }
  ]

}

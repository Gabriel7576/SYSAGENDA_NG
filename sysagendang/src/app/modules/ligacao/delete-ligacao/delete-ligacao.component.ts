import { LigacaoService } from './../ligacao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-delete-ligacao',
  templateUrl: './delete-ligacao.component.html',
  styleUrls: ['./delete-ligacao.component.css']
})
export class DeleteLigacaoComponent implements OnInit {

  codContato:string;
  codLigacao:string;

  constructor(private route:ActivatedRoute, private router:Router, private ligacaoService:LigacaoService, private util:UtilService){}

  ngOnInit(): void {
    const codContato = this.route.snapshot.paramMap.get('codContato');
    this.codContato = codContato;
    const codLigacao = this.route.snapshot.paramMap.get('codLigacao');
    this.codLigacao = codLigacao;
  }

  deletar(codContato:string, codLigacao:string){
    this.ligacaoService.delete(codContato, codLigacao).subscribe(()=>{
      this.util.showMessage("Ligação salva com sucesso!");
      this.router.navigate(['/ligacao']);
    });
  }

  cancel(){
    
  }

}

import { UtilService } from 'src/app/core/services/util.service';
import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-contato',
  templateUrl: './delete-contato.component.html',
  styleUrls: ['./delete-contato.component.css']
})
export class DeleteContatoComponent implements OnInit {

  id: string;

  constructor(private contatoService: ContatoService, private router: Router, private route: ActivatedRoute, private utilService: UtilService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('codContato');
    this.id = id;
  }

  deletar(id: string): void {
    console.log(id);
    this.contatoService.delete(id).subscribe(() => {
      this.utilService.showMessage("Ação Concluida com Sucesso!");
      this.router.navigate(['/contato']);
    })
  }

  cancel(): void {
    this.router.navigate(["/contato"]);
  }

}

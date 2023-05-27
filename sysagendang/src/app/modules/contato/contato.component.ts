import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Contato } from 'src/app/core/models/contato';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<Contato>();
  displayedColumns = ['codContato', 'nome', 'telefone', 'numero'];

  constructor(private contatoService: ContatoService, private router: Router) {
  }

  ngOnInit(): void {
    this.contatoService.readContato().subscribe(contatos => {
      this.dataSource.data = contatos;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  redirectTo() {
    this.router.navigate(['contato/create']);
  }

}


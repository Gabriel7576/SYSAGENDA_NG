import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Ligacao } from 'src/app/core/models/ligacao';
import { LigacaoService } from './ligacao.service';

@Component({
  selector: 'app-ligacao',
  templateUrl: './ligacao.component.html',
  styleUrls: ['./ligacao.component.css']
})
export class LigacaoComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  selection = new SelectionModel<Ligacao>(true, []);
  dataSource = new MatTableDataSource<Ligacao>();
  displayedColumns = ['codContato', 'codLigacao', 'data', 'Observacao', 'checkbox'];
  ChangeDetectorRef: any;

  constructor(private ligacaoService: LigacaoService, private router: Router) {
  }

  ngOnInit(): void {
    this.ligacaoService.read().subscribe(ligacoes => {
      this.dataSource.data = ligacoes;
      console.log(ligacoes)
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  @HostListener("window:resize")
  onResize() {
    this.updatePageSize();
  }

  redirectTo() {
    this.router.navigate(['ligacao/create']);
  }

  updatePageSize(): void {

    const rowHeight = 51.99;
    const tableHeaderHeight = 56;
    const tableFooterHeight = 64;
    const headerHeight = 64;
    const footerHeight = 64;
    const padding = 40;

    // Altura disponível para a tabela
    const availableHeight = window.innerHeight - headerHeight - footerHeight - padding * 2;

    // Calcular o número de linhas visíveis na tabela
    const tableContentHeight = availableHeight - tableHeaderHeight - tableFooterHeight;
    const visibleRows = Math.floor(tableContentHeight / rowHeight);

    // Calcular o tamanho da página do paginador
    const pageSize = visibleRows;

    this.dataSource.paginator.pageSize = pageSize;
    this.ChangeDetectorRef.detectChanges();
  }
}

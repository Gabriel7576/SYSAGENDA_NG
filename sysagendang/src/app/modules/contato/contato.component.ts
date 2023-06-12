import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Contato } from 'src/app/core/models/contato';
import { ContatoService } from './contato.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  selection = new SelectionModel<Contato>(true, []);
  dataSource = new MatTableDataSource<Contato>();
  displayedColumns = ['codContato', 'nome', 'telefone', 'checkbox'];

  constructor(private contatoService: ContatoService, private router: Router, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.contatoService.read().subscribe(contatos => {
      this.dataSource.data = contatos;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.updatePageSize();
  }

  @HostListener("window:resize")
  onResize() {
    this.updatePageSize();
  }

  redirectTo() {
    this.router.navigate(['contato/create']);
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
    this.changeDetectorRef.detectChanges();
  }

}


import { CreateLigacaoComponent } from './create-ligacao/create-ligacao.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ligacao } from 'src/app/core/models/ligacao';

@Injectable({
  providedIn: 'root'
})
export class LigacaoService {

  baseUrl = 'http://10.100.0.125:8080/sysagendasrv/api/ligacao';

  constructor(private http: HttpClient) { }

  create(ligacao: Ligacao): Observable<Ligacao> {
    return this.http.post<Ligacao>(this.baseUrl, ligacao);
  }

  read(): Observable<Ligacao[]> {
    const url = `${this.baseUrl}/list`;
    return this.http.get<Ligacao[]>(url);
  }

  readById(codContato: string, codLigacao: string): Observable<Ligacao> {
    const url = `${this.baseUrl}/${codContato}/${codLigacao}`;
    return this.http.get<Ligacao>(url);
  }

  delete(codContato: string, codLigacao: string): Observable<any> {
    const url = `${this.baseUrl}/${codContato}/${codLigacao}`;
    return this.http.delete(url);
  }
}

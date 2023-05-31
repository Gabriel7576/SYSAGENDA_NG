import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from 'src/app/core/models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  baseUrl = 'http://10.100.0.125:8080/sysagendasrv/api/contato';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  create(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.baseUrl, contato);
  }

  read(): Observable<Contato[]> {
    const url = `${this.baseUrl}/list`;
    return this.http.get<Contato[]>(url);
  }

  readById(id: string): Observable<Contato> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Contato>(url);
  }

  update(contato: Contato): Observable<Contato> {
    const url = `${this.baseUrl}/${contato.codContato}`;
    return this.http.put<Contato>(url, contato);
  }

  delete(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}

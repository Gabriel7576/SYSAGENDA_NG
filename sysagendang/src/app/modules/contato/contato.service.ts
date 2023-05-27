import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from 'src/app/core/models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  url = 'http://localhost:8080/sysagendasrv/api/contato';

  constructor(private http:HttpClient, private snackBar:MatSnackBar) { }

  createContato(contato:Contato): Observable<Contato>{
    return this.http.post<Contato>(this.url, contato);
  }

  readContato(): Observable<Contato[]>{
    return this.http.get<Contato[]>(this.url + '/list');
  }
}

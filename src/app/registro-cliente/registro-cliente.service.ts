import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroClienteService {
  private urlendpoint:string='http://localhost:3000/api/usuarios/crearusuario';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }
  
  create(usuario:usuario):Observable<usuario>{
    return this.http.post<usuario>(this.urlendpoint, usuario, {headers: this.httpHeaders})
  }
}

import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { usuario } from './usuario';
import { tap } from 'rxjs/operators';
import { JwtResponse } from '../interceptors/jwt-response';

@Injectable({
  providedIn: 'root'
})
export class RegistroClienteService {
  private urlendpoint:string='http://localhost:8080/api/usuarios/crearusuario';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  private apiUrl = 'http://localhost:8080/api/usuarios';
  constructor(private http:HttpClient) { }
  
  create(usuaio:usuario):Observable<usuario>{
    return this.http.post<usuario>(this.urlendpoint, usuaio, {headers: this.httpHeaders})
    console.log("Usuario creado exitosamente");
  }

  login(correo: string, clave: string): Observable<any> {
    const body = { correo, clave };
    return this.http.post(`${this.apiUrl}/autenticar`, body).pipe(
      tap((response: any) => {
        const token = response.token;
        localStorage.setItem('access_token', token);
        console.log("Acceso concedido")
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token');
  }

  getToken(correo: string, clave: string): Observable<JwtResponse> {
    return this.http.post<JwtResponse>('/api/usuarios/autenticar', { correo, clave });
  }
}

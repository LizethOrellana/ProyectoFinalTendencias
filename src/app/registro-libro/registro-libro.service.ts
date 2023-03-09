import { Injectable } from '@angular/core';
import { libros } from './libros';
import { Observable} from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegistroLibroService {
  private urlendpoint: string = 'http://localhost:8080/api/crearlibro';
  private urlendpoint1: string = 'http://localhost:8080/api/listarlibros';
  private urlendpoint2: string = 'http://localhost:8080/api/cursos/getlibros';
  private urlBuscarLibro: string ='http://localhost:8080/api/listarlibrosxnombre';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  create(libro: libros): Observable<libros> {
    return this.http.post<libros>(this.urlendpoint, libro, { headers: this.httpHeaders })
  }
  obtenerLibro(nombre: String): Observable<libros[]> {
    return this.http.get<libros[]>(this.urlendpoint1);
  }
  getLibros(): Observable <libros[]>{
    return this.http.get<libros[]>(this.urlendpoint2);
  }

  buscarLibro(nombre: String)
    : Observable<libros> {
    let res = this.urlBuscarLibro + '/' + nombre;
    return this.http.get<libros>(res);
  }
}

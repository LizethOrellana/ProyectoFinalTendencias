import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { RegistroClienteService } from '../registro-cliente/registro-cliente.service';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private apiUrl = 'http://localhost:8080/api/usuarios';

  constructor(
    private registroClienteService: RegistroClienteService,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token$ = this.registroClienteService.getToken('correo', 'clave');
    const isApiUrl = request.url.startsWith(this.apiUrl);
    return token$.pipe(
      mergeMap(token => {
        if (token && isApiUrl) {
          const decodedToken = this.jwtHelper.decodeToken(token.token);
          if (this.jwtHelper.isTokenExpired(token.token)) {
            this.registroClienteService.logout();
            location.reload();
          } else {
            request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${token.token}`
              }
            });
          }
        }
        return next.handle(request);
      })
    );
  }
  
   
}

import { Component, OnInit } from '@angular/core';
import { RegistroClienteService } from '../registro-cliente/registro-cliente.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(private usuarioservice: RegistroClienteService) { }

  ngOnInit(): void {
  }
login(correo:string, clave:string){
  this.usuarioservice.login(correo+'', clave+'').subscribe();
}
}

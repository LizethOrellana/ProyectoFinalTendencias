import { Component, OnInit } from '@angular/core';
import { usuario } from './usuario';
import { RegistroClienteService } from './registro-cliente.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  public usuario: usuario = new usuario();
  constructor(private usuarioservice: RegistroClienteService, private router: Router) { }

  ngOnInit(): void {
    
  }
  public create(contra1: String, contra2: String): void {
    if (contra1 == contra2) {
      this.usuario.estado = true;
      this.usuario.rol = 2;
      console.log(this.usuario.cedula+' '+this.usuario.nombre+' '+this.usuario.correo+' '+this.usuario.direccion+' '+this.usuario.rol+' '+this.usuario.estado+' '+this.usuario.id_usuario)
      this.usuarioservice.create(this.usuario).subscribe(
        response => {
          this.usuario/*,this.router.navigate([''])*/
          //Swal.fire('Usuario Guardado','Te damos la bienvenida "'+this.usuario.persona?.nombres+'" te has registrado con exito','success')
          Swal.fire({
            title: '<strong>¡Usuario Guardado!</strong>',
            confirmButtonText: 'OK',
            confirmButtonColor: '#012844',
            icon: 'success',
            html:
              '<b>' + this.usuario.nombre + '</b><br>' +
              'te has registrado con exito'
          })
        }
      )
    }else{
      Swal.fire({
        title: '<strong>¡Contraseñas no coinciden!</strong>',
        confirmButtonText: 'OK',
        confirmButtonColor: '#012844',
        icon: 'error',
      })
    }
  }
}

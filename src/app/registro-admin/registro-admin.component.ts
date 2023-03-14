import { Component, OnInit } from '@angular/core';
import { usuario } from '../registro-cliente/usuario';
import { RegistroClienteService } from '../registro-cliente/registro-cliente.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})
export class RegistroAdminComponent implements OnInit {
  public usuario: usuario = new usuario();
  constructor(private usuarioservice: RegistroClienteService, private router: Router) { }

  ngOnInit(): void {
  }
  public create(contra1: String, contra2: String): void {
    if (contra1 == contra2) {
      this.usuario.estado = true;
      this.usuario.rol = 1;
      console.log(this.usuario.cedula+' '+this.usuario.nombre+' '+this.usuario.correo+' '+this.usuario.direccion+' '+this.usuario.rol+' '+this.usuario.estado+' '+this.usuario.id_usuario)
      
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

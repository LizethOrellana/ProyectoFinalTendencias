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
  public create(cedula:string,nombre:string, contra1: String, contra2: String): void {
    if(contra1!=contra2 && contra1.length!=8){
      Swal.fire({
        title: '<strong>¡Contraseñas no coinciden o es menor a 8 caracteres!</strong>',
        confirmButtonText: 'OK',
        confirmButtonColor: '#012844',
        icon: 'error'
      })
    }else if (cedula.length === 10) {
      console.log("boton");
      this.usuarioservice.create(this.usuario).subscribe();
    }else{
      
    }
    
  }
}

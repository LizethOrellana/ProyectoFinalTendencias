import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { libros } from './libros';
import { RegistroLibroService } from './registro-libro.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-registro-libro',
  template: `
    <select #categoriaSelec>
      <option #terror value="fantasia">Fantasía</option>
      <option value="suspenso">Suspenso</option>
      <option value="historico">Histórico</option>
      <option value="drama">Drama</option>
    </select>
  `,
  templateUrl: './registro-libro.component.html',
  styleUrls: ['./registro-libro.component.css']
})
export class RegistroLibroComponent implements OnInit {
  public libros: libros = new libros();
  libros1: libros[] = [];
  libs: libros[]=[];
  bus: boolean = true;
  buscarval: boolean = false;
  public previsualizacion?: string;
  constructor(private sanitizer: DomSanitizer,private libroservice: RegistroLibroService, private router: Router) { }
  @ViewChild('titulo') titulo!: ElementRef;
  @ViewChild('autor') autor!: ElementRef;
  @ViewChild('editorial') editorial!: ElementRef;
  @ViewChild('precio') precio!: ElementRef;
  @ViewChild('stock') stock!: ElementRef;
  @ViewChild('categoriaSelect') categoriaSelect!: ElementRef;

  ngOnInit(): void {
    this.libroservice.getLibros().subscribe(
      libro => this.libros1 = libro
      //libro => this.libros=libro
    );
  }
  editar(libro:any){
    this.titulo.nativeElement.value = libro.titulo;
    this.autor.nativeElement.value = libro.autor;
    this.editorial.nativeElement.value = libro.editorial;
    this.precio.nativeElement.value = libro.precio;
    this.stock.nativeElement.value = libro.autor;
    this.categoriaSelect.nativeElement.select=libro.categoria;
  }

  buscarLibxNomb(nombre: String) {
    this.bus = false;
    this.libroservice.buscarLibro(nombre).subscribe(
      librs => {
        this.libs = librs;
        console.log(this.libs.length);
        this.buscarval = true;
      }
    )
  }

  capturarImagen(event: any): any {
    const archivocapturado = event.target.files[0]
    this.extraerBase64(archivocapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    })
    
  }
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result

        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      console.log("Error al Subir Imagen")
    }
  })

}

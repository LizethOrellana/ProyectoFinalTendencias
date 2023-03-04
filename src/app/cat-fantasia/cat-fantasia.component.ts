import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-fantasia',
  templateUrl: './cat-fantasia.component.html',
  styleUrls: ['./cat-fantasia.component.css']
})
export class CatFantasiaComponent implements OnInit {
  currentComponent: string = 'carrito';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  showCarrito() {
    this.currentComponent = 'carrito';
  }
}

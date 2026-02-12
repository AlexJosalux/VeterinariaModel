import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  anio:number = new Date().getFullYear();
  enlaces = [
    { nombre: 'Home', link: '/' },
    { nombre: 'Servicios', link: 'servicios' },
    { nombre: 'Consultas', link: 'consultas' },
    { nombre: 'Mascotas', link: '#' },
    { nombre: 'Contacto', link: '#' },
  ];

}

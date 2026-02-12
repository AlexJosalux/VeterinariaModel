import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { Mascota } from '../../models/mascota';
import { DetalleConsulta } from '../../shared/detalle-consulta/detalle-consulta';
import { HeroHome } from '../../shared/hero-home/hero-home';
@Component({
  selector: 'app-consultas',
  imports: [  CommonModule, RouterModule, DetalleConsulta, HeroHome],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {
  mascotas: Mascota[] = [
    { id: 1, nombre: 'Firulais', especie: 'Perro', historial: 'Vacunado, desparasitado' },
    { id: 2, nombre: 'Luna', especie: 'Gato', historial: 'Vacunado, desparasitado' },
    { id: 3, nombre: 'Max', especie: 'Perro', historial: 'Sin historial' },    
    
  ]; 
  mascotaSeleccionada: Mascota | null = null;


  mensajeAviso: string = ''

// Funcion que maneja el evento click sobre la lista de mascotas
verDetalles(mascota: Mascota) {
  this.mascotaSeleccionada = mascota;
}

// Funcion para actualizar el mensaje de aviso
procesarAviso(mensaje: string) {
  this.mensajeAviso = mensaje;
}
}

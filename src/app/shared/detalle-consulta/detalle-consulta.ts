import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-consulta',
  imports: [  CommonModule],
  templateUrl: './detalle-consulta.html',
  styleUrl: './detalle-consulta.css',
})
export class DetalleConsulta {

  //Componente HIJO
  //Recibe una mascota del componente padre
  @Input() mascota?: Mascota; 

  //Enviar un evento al componente Padre
  @Output() notificarAccion = new EventEmitter<string>();

  //Funcion que determine lo que hace el evento
  avisarIngreso():void {
    if(this.mascota) {
      this.notificarAccion.emit(
        `La mascota ${this.mascota.nombre} ha sido ingresada a consulta.`);
    } 
  }

}

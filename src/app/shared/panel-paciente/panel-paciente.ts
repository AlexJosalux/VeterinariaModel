import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panel-paciente',
  imports: [ CommonModule, FormsModule, RouterLink],
  templateUrl: './panel-paciente.html',
  styleUrl: './panel-paciente.css',
})
export class PanelPaciente {
  nombreFiltro: string = '';
  pacientes = [
    {nombre: 'Ramon',especie: 'Perro', urgencia: 'Alta', recuperacion: '85' },
    {nombre: 'Luna',especie: 'Gato', urgencia: 'Media', recuperacion: '70' },
    {nombre: 'Max',especie: 'Perro', urgencia: 'Baja', recuperacion: '90' },
  ];
}

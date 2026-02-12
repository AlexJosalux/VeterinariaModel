import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HeroHome } from '../../shared/hero-home/hero-home';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule, HeroHome, CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  infoContacto = {
    direccion: 'Av. Amazonas y Gaspar de Villarroel, Quito',
    telefono: '+593 987 654 321',
    email: 'contacto@vetone.com',
    horario: 'Lunes a Domingo: 24 Horas'
  };

  formulario = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  enviarMensaje() {
    console.log('Datos enviados:', this.formulario);
    alert(`¡Gracias ${this.formulario.nombre}! Tu mensaje ha sido enviado con éxito. Nos contactaremos contigo a ${this.formulario.email}.`);
    
    this.formulario = { nombre: '', email: '', mensaje: '' };
  }

}

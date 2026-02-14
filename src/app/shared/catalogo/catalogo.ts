import { Component, inject, signal } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { Pet } from '../../models/pet'; // Ajusta la ruta según tu proyecto

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css'], // ← es styleUrls
})
export class Catalogo {

  private servicioPet = inject(PetService);
  mascotas = signal<Pet[]>([]);
  ngOnInit() {
    this.leerMascotas();
  }

  leerMascotas() {
    this.servicioPet.getPets().subscribe((respuesta) => {
      this.mascotas.set(respuesta.data);
    });

  

}
}


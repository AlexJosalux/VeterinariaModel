import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroHome } from '../../shared/hero-home/hero-home';

@Component({
  selector: 'app-mascotas',
  imports: [HeroHome, CommonModule],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css',
})
export class Mascotas {
  mascotas = [
    {
      id: 1,
      nombre: "Milo",
      especie: "Perro",
      sexo: "Macho",
      edad: "2 años",
      personalidad: "Juguetón y muy sociable con niños.",
      imagen: "https://images.saymedia-content.com/.image/t_share/MTc0OTY4NTU1MTQwNDI1MTU2/beagles-hunting-dog-or-family-pet.jpg",
      urgente: true
    },
    {
      id: 2,
      nombre: "Tito",
      especie: "Gato",
      sexo: "Macho",
      edad: "6 meses",
      personalidad: "Tranquilo, ideal para departamento.",
      imagen: "https://tse3.mm.bing.net/th/id/OIP.FcDirqPRvvGyxI4GQyQQZgHaFs?rs=1&pid=ImgDetMain&o=7&rm=3",
      urgente: false
    },
    {
      id: 3,
      nombre: "Zeus",
      especie: "Perro",
      sexo: "Macho",
      edad: "4 años",
      personalidad: "Protector, leal y con mucha energía.",
      imagen: "https://tse3.mm.bing.net/th/id/OIP.t65gOtjxHiDo7odOENUHPgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
      urgente: false
    },
    {
      id: 4,
      nombre: "Pelusa",
      especie: "Gato",
      sexo: "Hembra",
      edad: "1 año",
      personalidad: "Independiente pero muy cariñosa.",
      imagen: "https://tse3.mm.bing.net/th/id/OIP.W5e_rqYotmi2t-LnxpT_DAHaE6?rs=1&pid=ImgDetMain&o=7&rm=3",
      urgente: true
    }
  ];

  solicitarAdopcion(mascotaNombre: string) {
    alert(`¡Gracias por tu interés! Hemos iniciado tu solicitud para adoptar a ${mascotaNombre}. Pronto nos contactaremos.`);
  }

}

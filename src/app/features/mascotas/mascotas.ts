import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroHome } from '../../shared/hero-home/hero-home';
import { Catalogo } from '../../shared/catalogo/catalogo';
@Component({
  selector: 'app-mascotas',
  imports: [HeroHome, CommonModule, Catalogo],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css',
})
export class Mascotas {
 
    
    }
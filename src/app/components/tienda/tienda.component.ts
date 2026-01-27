import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule], // ← Importante para *ngFor
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent {
  palas = [
    {
      nombre: 'NOK ML10 PRO CUP COBRA 23',
      descripcion: 'Pala de pádel',
      precioAnterior: '169,95',
      precioActual: '89,95',
      imagen: 'assets/images/bullpadel.webp'
    },
    {
      nombre: 'NOK AT GENIUS LIMITED EDITION 2023',
      descripcion: 'Pala profesional',
      precioAnterior: '449,95',
      precioActual: '189,95',
      imagen: 'assets/images/atgenius.webp'
    },
    {
      nombre: 'NOX ML10 PRO CUP',
      descripcion: 'Pala control',
      precioAnterior: '299,95',
      precioActual: '149,95',
      imagen: 'assets/images/metalbone.webp'
    },
    {
      nombre: 'BABOLAT VERTICAL',
      descripcion: 'Pala potencia',
      precioAnterior: '259,95',
      precioActual: '129,95',
      imagen: 'assets/images/babolat.webp'
    },
    {
      nombre: 'HEAD ALPHA PRO',
      descripcion: 'Pala versátil',
      precioAnterior: '219,95',
      precioActual: '109,95',
      imagen: 'assets/images/betis.webp'
    }
  ];
}
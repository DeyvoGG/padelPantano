import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent {
  palas = [
    {
      nombre: 'Bullpadel Paquito Navarro',
      descripcion: 'Pala de pádel',
      precioAnterior: '169,95',
      precioActual: '89,95',
      imagen: 'assets/images/bullpadel.webp'
    },
    {
      nombre: 'NOX AT GENIUS LIMITED EDITION 2023',
      descripcion: 'Pala profesional',
      precioAnterior: '449,95',
      precioActual: '189,95',
      imagen: 'assets/images/atgenius.webp'
    },
    {
      nombre: 'Adidas Metalbone',
      descripcion: 'Pala potencia',
      precioAnterior: '299,95',
      precioActual: '149,95',
      imagen: 'assets/images/metalbone.webp'
    },
    {
      nombre: 'BABOLAT Juan Lebrón',
      descripcion: 'Pala potencia',
      precioAnterior: '259,95',
      precioActual: '129,95',
      imagen: 'assets/images/babolat.webp'
    },
    {
      nombre: 'Bullpadel Betis',
      descripcion: 'Pala versátil',
      precioAnterior: '219,95',
      precioActual: '109,95',
      imagen: 'assets/images/betis.webp'
    }
  ];

  zapatillas = [
    {
      nombre: 'Lacoste AG-LT21',
      descripcion: 'Zapatillas pádel',
      precioAnterior: '149,95',
      precioActual: '79,95',
      imagen: 'assets/images/zapLacoste.webp'
    },
    {
      nombre: 'Head Sprint Pro 3.0',
      descripcion: 'Zapatillas ligera',
      precioAnterior: '139,95',
      precioActual: '69,95',
      imagen: 'assets/images/zapHead.webp'
    },
    {
      nombre: 'Babolat Jet Premura',
      descripcion: 'Zapatillas competición',
      precioAnterior: '129,95',
      precioActual: '59,95',
      imagen: 'assets/images/zapBabolat.webp'
    },
    {
      nombre: 'Ascis Court FF 3',
      descripcion: 'Zapatillas agarre',
      precioAnterior: '159,95',
      precioActual: '84,95',
      imagen: 'assets/images/zapAscis.webp'
    },
    {
      nombre: 'Adidas Adiwear 6',
      descripcion: 'Zapatillas confort',
      precioAnterior: '119,95',
      precioActual: '54,95',
      imagen: 'assets/images/zapAdidas.webp'
    }
  ];

  paleteros = [
    {
      nombre: 'Starvie Pro Series',
      descripcion: 'Paletero 3 bolsillos',
      precioAnterior: '89,95',
      precioActual: '49,95',
      imagen: 'assets/images/palStarvie.webp'
    },
    {
      nombre: 'Siux Paletero Mastercombi-Large',
      descripcion: 'Paletero premium',
      precioAnterior: '119,95',
      precioActual: '69,95',
      imagen: 'assets/images/palSiux.webp'
    },
    {
      nombre: 'Enebe Classic-Black',
      descripcion: 'Paletero resistente',
      precioAnterior: '99,95',
      precioActual: '59,95',
      imagen: 'assets/images/palEnebe.webp'
    },
    {
      nombre: 'Dropshot Pro Series',
      descripcion: 'Paletero espacioso',
      precioAnterior: '109,95',
      precioActual: '64,95',
      imagen: 'assets/images/palDropshot.webp'
    },
    {
      nombre: 'Bullpadel Bull-PRO',
      descripcion: 'Paletero ligero',
      precioAnterior: '79,95',
      precioActual: '44,95',
      imagen: 'assets/images/palBullpadel.webp'
    }
  ];
}
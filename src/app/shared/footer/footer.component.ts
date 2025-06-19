import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = [
    { path: '/tienda', label: 'Nuestro Té' },
    { path: '/menu-tienda', label: 'Nuestro Menú' },
    { path: '/franquicias', label: 'Franquicias' },
    { path: '/tutoriales', label: 'Tutoriales' },
    { path: '/contacto', label: 'Contacto' },
    { path: '/trabaja-en-tdt', label: 'Trabajá con Nosotros' }
  ];

  socialLinks = [
    { icon: '📱', label: 'WhatsApp', url: '#' },
    { icon: '📷', label: 'Instagram', url: '#' },
    { icon: '📘', label: 'Facebook', url: '#' },
    { icon: '🐦', label: 'Twitter', url: '#' }
  ];
} 
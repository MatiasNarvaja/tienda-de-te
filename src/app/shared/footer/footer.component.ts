import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomDialogService } from '../custom-dialog.service';

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
    { path: '/tutoriales', label: 'Tutoriales' },
    { path: '/menu-tienda', label: 'Nuestro Menú' },
    { path: '/trabaja-en-tdt', label: 'Trabajá con Nosotros' },
    { path: '/franquicias', label: 'Franquicias' },
    { path: '/contacto', label: 'Contacto' }
  ];

  socialLinks = [
    { icon: '📱', label: 'WhatsApp', url: '#' },
    { icon: '📷', label: 'Instagram', url: '#' },
    { icon: '📘', label: 'Facebook', url: '#' },
    { icon: '🐦', label: 'Twitter', url: '#' }
  ];

  constructor() {}

  showSocialDialog(socialName: string) {
    CustomDialogService.openDialog({
      title: '¡Próximamente!',
      message: 'Estamos trabajando en nuestras redes sociales',
      subtitle: `${socialName} estará disponible pronto`,
      buttonText: 'Cerrar'
    });
  }
} 
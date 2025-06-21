import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, SuccessDialogComponent],
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

  constructor(private dialog: MatDialog) {}

  showSocialDialog(socialName: string) {
    this.dialog.open(SuccessDialogComponent, {
      width: '400px',
      data: {
        title: '¡Próximamente!',
        message: `Estamos trabajando en nuestras redes sociales`,
        subtitle: `${socialName} estará disponible pronto`,
        hideSuccessIcon: true
      }
    });
  }
} 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeteriaSectionComponent } from '../../shared/cafeteria-section/cafeteria-section.component';
import { CustomDialogService } from '../../shared/custom-dialog.service';

@Component({
  selector: 'app-nuestro-menu',
  standalone: true,
  imports: [CommonModule, CafeteriaSectionComponent],
  templateUrl: './nuestro-menu.component.html',
  styleUrl: './nuestro-menu.component.scss'
})
export class NuestroMenuComponent {
  mainImage = 'assets/images/nuestro-menu/bagel.jpg';
  galleryImages = [
    'assets/images/nuestro-menu/torta.jpg',
    'assets/images/nuestro-menu/torta-2.jpg',
    'assets/images/nuestro-menu/capuccino-casero-1.jpg',
    'assets/images/nuestro-menu/brunch.jpg',
    'assets/images/nuestro-menu/sandwich-veggie.jpg',
    'assets/images/nuestro-menu/cafeteria.jpg'
  ];

  constructor() {}

  showMenuDialog() {
    CustomDialogService.openDialog({
      title: '¡Próximamente!',
      message: 'Estamos trabajando en crear nuestro menú',
      subtitle: 'Pronto estará disponible',
      buttonText: 'Cerrar'
    });
  }
}

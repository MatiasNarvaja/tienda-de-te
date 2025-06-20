import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SuccessDialogComponent } from '../../shared/success-dialog/success-dialog.component';
import { CafeteriaSectionComponent } from '../../shared/cafeteria-section/cafeteria-section.component';

@Component({
  selector: 'app-nuestro-menu',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, CafeteriaSectionComponent],
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

  constructor(private dialog: MatDialog) {}

  showMenuDialog() {
    this.dialog.open(SuccessDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        title: '¡Próximamente!',
        message: 'Estamos trabajando en crear nuestro menú',
        subtitle: 'Pronto estará disponible'
      }
    });
  }
}

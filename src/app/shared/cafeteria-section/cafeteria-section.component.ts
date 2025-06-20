import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-cafeteria-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafeteria-section.component.html',
  styleUrl: './cafeteria-section.component.scss'
})
export class CafeteriaSectionComponent {
  cafeteriaImage = 'assets/images/nuestro-menu/cafeteria.jpg';
  
  constructor(private dialog: MatDialog) {}
  
  onLocationClick() {
    this.dialog.open(SuccessDialogComponent, {
      width: '400px',
      data: {
        title: 'Funcionalidad en Desarrollo',
        message: 'Estamos trabajando en esta funcionalidad.',
        subtitle: 'Próximamente podrás encontrar todas nuestras ubicaciones aquí.'
      }
    });
  }
} 
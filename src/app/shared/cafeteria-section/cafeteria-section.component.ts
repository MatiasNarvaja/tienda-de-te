import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDialogService } from '../custom-dialog.service';

@Component({
  selector: 'app-cafeteria-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafeteria-section.component.html',
  styleUrl: './cafeteria-section.component.scss'
})
export class CafeteriaSectionComponent {
  cafeteriaImage = 'assets/images/nuestro-menu/cafeteria.jpg';
  
  constructor() {}
  
  onLocationClick() {
    CustomDialogService.openDialog({
      title: 'Funcionalidad en Desarrollo',
      message: 'Estamos trabajando en esta funcionalidad.',
      subtitle: 'Próximamente podrás encontrar todas nuestras ubicaciones aquí.',
      buttonText: 'Cerrar'
    });
  }
} 
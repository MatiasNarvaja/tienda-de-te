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
    // Crear un elemento de overlay personalizado
    const overlay = document.createElement('div');
    overlay.className = 'custom-dialog-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    `;

    // Crear el contenido del diálogo
    const dialog = document.createElement('div');
    dialog.className = 'custom-dialog';
    dialog.style.cssText = `
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      padding: 20px;
      max-width: 400px;
      width: 90%;
      text-align: center;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    `;

    dialog.innerHTML = `
      <h2 style="color: #c7a17a; font-family: 'Oswald', sans-serif; font-size: 1.5rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 20px 0;">¡Próximamente!</h2>
      <p style="font-family: 'Oswald', sans-serif; font-size: 1.1rem; color: #2d2a2a; margin: 10px 0; font-weight: 400;">Estamos trabajando en crear nuestro menú</p>
      <p style="font-size: 0.9rem; color: #888888; font-weight: 300; margin: 10px 0;">Pronto estará disponible</p>
      <button style="font-family: 'Oswald', sans-serif; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; padding: 10px 30px; background: #c7a17a; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 20px;">Cerrar</button>
    `;

    // Agregar evento para cerrar
    const closeButton = dialog.querySelector('button');
    const closeDialog = () => {
      document.body.removeChild(overlay);
    };

    closeButton?.addEventListener('click', closeDialog);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeDialog();
      }
    });

    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
  }
}

import { CustomDialogComponent } from './custom-dialog.component';

export class CustomDialogService {
  private static dialogRef: any;
  private static container: HTMLElement | null = null;

  static openDialog({
    title = '',
    message = '',
    subtitle = '',
    buttonText = 'Cerrar'
  }: {
    title?: string;
    message?: string;
    subtitle?: string;
    buttonText?: string;
  }) {
    if (this.dialogRef) return;

    // Crear un contenedor temporal
    this.container = document.createElement('div');
    document.body.appendChild(this.container);

    // Crear el overlay y contenido del diálogo
    const overlay = document.createElement('div');
    overlay.className = 'custom-dialog-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    `;

    const dialog = document.createElement('div');
    dialog.className = 'custom-dialog-content';
    dialog.style.cssText = `
      background: rgba(255,255,255,0.95);
      border-radius: 12px;
      padding: 24px 20px 20px 20px;
      max-width: 400px;
      width: 90vw;
      text-align: center;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      font-family: 'Oswald', sans-serif;
    `;

    dialog.innerHTML = `
      <h2 style="color: #c7a17a; font-family: 'Oswald', sans-serif; font-size: 1.5rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 20px 0;">${title}</h2>
      <p style="font-family: 'Oswald', sans-serif; font-size: 1.1rem; color: #2d2a2a; margin: 10px 0; font-weight: 400;">${message}</p>
      ${subtitle ? `<p style="font-size: 0.9rem; color: #888888; font-weight: 300; margin: 10px 0;">${subtitle}</p>` : ''}
      <button style="font-family: 'Oswald', sans-serif; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; padding: 10px 30px; background: #c7a17a; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 20px; font-size: 1rem;">${buttonText}</button>
    `;

    // Agregar eventos para cerrar
    const closeButton = dialog.querySelector('button');
    const closeDialog = () => {
      if (this.container) {
        document.body.removeChild(this.container);
        this.container = null;
        this.dialogRef = null;
      }
    };

    closeButton?.addEventListener('click', closeDialog);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeDialog();
      }
    });

    overlay.appendChild(dialog);
    this.container.appendChild(overlay);
    this.dialogRef = overlay;
  }
} 
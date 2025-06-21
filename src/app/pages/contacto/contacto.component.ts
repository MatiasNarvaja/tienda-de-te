import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required, Validators.minLength(5)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simular envío del formulario
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessDialog();
        this.contactForm.reset();
      }, 1500);
    } else {
      this.markFormGroupTouched();
    }
  }

  private showSuccessDialog() {
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
      <h2 style="color: #c7a17a; font-family: 'Oswald', sans-serif; font-size: 1.5rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 20px 0;">¡Mensaje enviado!</h2>
      <p style="font-family: 'Oswald', sans-serif; font-size: 1.1rem; color: #2d2a2a; margin: 10px 0; font-weight: 400;">Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
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

  private markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }
}

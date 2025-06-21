import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-franquicias',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './franquicias.component.html',
  styleUrl: './franquicias.component.scss'
})
export class FranquiciasComponent {
  @ViewChild('franquiciasForm') form!: ElementRef;
  isSubmitting = false;

  // Propiedades para rastrear el estado de cada campo
  formData = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    como: '',
    zona: ''
  };

  // Propiedades para rastrear la validez de cada campo
  fieldValidity = {
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,
    como: false,
    zona: false
  };

  constructor() {}

  // Método para validar que solo se ingresen números en el teléfono
  onTelefonoInput(event: any) {
    const input = event.target;
    const value = input.value;
    const numericValue = value.replace(/[^0-9]/g, '');
    if (value !== numericValue) {
      input.value = numericValue;
    }
    const isValid = numericValue.length >= 8;
    if (numericValue && !isValid) {
      input.classList.add('invalid-phone');
    } else {
      input.classList.remove('invalid-phone');
    }
    this.updateFieldValidity('telefono', isValid);
  }

  // Método para prevenir la entrada de caracteres no numéricos
  onTelefonoKeyPress(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }

  // Método para validar el formato de email
  onEmailInput(event: any) {
    const input = event.target;
    const email = input.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailRegex.test(email)) {
      input.classList.add('invalid-email');
    } else {
      input.classList.remove('invalid-email');
    }
    this.updateFieldValidity('email', emailRegex.test(email));
  }

  // Método para actualizar el estado de validez de un campo
  updateFieldValidity(fieldName: keyof typeof this.fieldValidity, isValid: boolean) {
    this.fieldValidity[fieldName] = isValid;
  }

  // Método para manejar cambios en campos de texto
  onFieldChange(fieldName: keyof typeof this.formData, event: any) {
    const value = event.target.value.trim();
    this.formData[fieldName] = value;
    const isValid = value.length >= 2;
    this.updateFieldValidity(fieldName, isValid);
  }

  // Método para verificar si el formulario está completo
  isFormComplete(): boolean {
    return Object.values(this.fieldValidity).every(valid => valid);
  }

  onSubmit() {
    if (!this.isFormComplete()) {
      return;
    }
    
    this.isSubmitting = true;
    
    // Simular envío del formulario
    setTimeout(() => {
      this.isSubmitting = false;
      this.resetForm();
      this.showCustomDialog();
    }, 1500);
  }

  private resetForm() {
    if (this.form && this.form.nativeElement) {
      this.form.nativeElement.reset();
      Object.keys(this.fieldValidity).forEach(key => {
        this.fieldValidity[key as keyof typeof this.fieldValidity] = false;
      });
      Object.keys(this.formData).forEach(key => {
        this.formData[key as keyof typeof this.formData] = '';
      });
    }
  }

  private showCustomDialog() {
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
      <h2 style="color: #c7a17a; font-family: 'Oswald', sans-serif; font-size: 1.5rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 20px 0;">¡Envío Exitoso!</h2>
      <p style="font-family: 'Oswald', sans-serif; font-size: 1.1rem; color: #2d2a2a; margin: 10px 0; font-weight: 400;">El mensaje fue enviado de manera exitosa</p>
      <p style="font-size: 0.9rem; color: #888888; font-weight: 300; margin: 10px 0;">Nos pondremos en contacto contigo pronto</p>
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

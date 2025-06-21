import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-trabaja-con-nosotros',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './trabaja-con-nosotros.component.html',
  styleUrl: './trabaja-con-nosotros.component.scss'
})
export class TrabajaConNosotrosComponent {
  @ViewChild('trabajaForm') form!: ElementRef;
  isSubmitting = false;
  
  // Propiedades para rastrear el estado de cada campo
  formData = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    puesto: '',
    sucursal: '',
    mensaje: ''
  };

  // Propiedades para rastrear la validez de cada campo
  fieldValidity = {
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,
    puesto: false,
    sucursal: false,
    mensaje: false
  };
  
  constructor() {
    console.log('Componente TrabajaConNosotros inicializado');
  }

  // Método para validar que solo se ingresen números en el teléfono
  onTelefonoInput(event: any) {
    const input = event.target;
    const value = input.value;
    
    // Remover cualquier carácter que no sea número
    const numericValue = value.replace(/[^0-9]/g, '');
    
    // Actualizar el valor del input solo con números
    if (value !== numericValue) {
      input.value = numericValue;
    }

    // Validar que tenga al menos 8 dígitos
    const isValid = numericValue.length >= 8;
    
    // Agregar o remover clase CSS según la validación
    if (numericValue && !isValid) {
      input.classList.add('invalid-phone');
    } else {
      input.classList.remove('invalid-phone');
    }

    // Actualizar el estado del formulario
    this.updateFieldValidity('telefono', isValid);
  }

  // Método para prevenir la entrada de caracteres no numéricos
  onTelefonoKeyPress(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    
    // Permitir solo números (0-9), backspace, delete, tab, escape, enter
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }

  // Método para validar el formato de email
  onEmailInput(event: any) {
    const input = event.target;
    const email = input.value;
    
    // Expresión regular para validar email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Agregar o remover clase CSS según la validación
    if (email && !emailRegex.test(email)) {
      input.classList.add('invalid-email');
    } else {
      input.classList.remove('invalid-email');
    }

    // Actualizar el estado del formulario
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
    
    // Validar que el campo no esté vacío y tenga al menos 2 caracteres
    const isValid = value.length >= 2;
    this.updateFieldValidity(fieldName, isValid);
  }

  // Método para manejar cambios en el select de sucursal
  onSucursalChange(event: any) {
    const value = event.target.value;
    this.formData.sucursal = value;
    this.updateFieldValidity('sucursal', value !== '');
  }

  // Método para verificar si el formulario está completo
  isFormComplete(): boolean {
    return Object.values(this.fieldValidity).every(valid => valid);
  }

  onSubmit() {
    console.log('=== MÉTODO ONSUBMIT EJECUTADO ===');
    
    // Verificar que el formulario esté completo antes de enviar
    if (!this.isFormComplete()) {
      console.log('Formulario incompleto, no se puede enviar');
      return;
    }
    
    this.isSubmitting = true;
    
    // Simular envío del formulario
    setTimeout(() => {
      this.isSubmitting = false;
      
      // Limpiar el formulario
      this.resetForm();
      
      // Mostrar diálogo personalizado
      this.showCustomDialog();
    }, 1500);
  }

  private resetForm() {
    console.log('Intentando limpiar formulario');
    if (this.form && this.form.nativeElement) {
      this.form.nativeElement.reset();
      
      // Resetear el estado de validez
      Object.keys(this.fieldValidity).forEach(key => {
        this.fieldValidity[key as keyof typeof this.fieldValidity] = false;
      });
      
      // Resetear los datos del formulario
      Object.keys(this.formData).forEach(key => {
        this.formData[key as keyof typeof this.formData] = '';
      });
      
      console.log('Formulario limpiado exitosamente');
    } else {
      console.log('No se pudo encontrar el formulario');
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

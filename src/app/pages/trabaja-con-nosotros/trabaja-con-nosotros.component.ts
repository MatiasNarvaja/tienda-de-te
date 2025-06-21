import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDialogService } from '../../shared/custom-dialog.service';

@Component({
  selector: 'app-trabaja-con-nosotros',
  standalone: true,
  imports: [CommonModule],
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
    // Componente inicializado
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
    // Verificar que el formulario esté completo antes de enviar
    if (!this.isFormComplete()) {
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
    }
  }

  private showCustomDialog() {
    CustomDialogService.openDialog({
      title: '¡Envío Exitoso!',
      message: 'El mensaje fue enviado de manera exitosa',
      subtitle: 'Nos pondremos en contacto contigo pronto',
      buttonText: 'Cerrar'
    });
  }
}

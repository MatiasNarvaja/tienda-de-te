import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SuccessDialogComponent } from '../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-franquicias',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './franquicias.component.html',
  styleUrl: './franquicias.component.scss'
})
export class FranquiciasComponent {
  @ViewChild('franquiciasForm') form!: ElementRef;

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

  constructor(private dialog: MatDialog) {}

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
    this.resetForm();
    this.dialog.open(SuccessDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        title: '¡Envío Exitoso!',
        message: 'El mensaje fue enviado de manera exitosa',
        subtitle: 'Nos pondremos en contacto contigo pronto'
      }
    });
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
}

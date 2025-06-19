import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../../shared/success-dialog/success-dialog.component';

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
    private fb: FormBuilder,
    private dialog: MatDialog
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
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '400px',
      data: {
        title: '¡Mensaje enviado!',
        message: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
        icon: 'check_circle'
      }
    });
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

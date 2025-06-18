import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SuccessDialogComponent } from '../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-trabaja-con-nosotros',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './trabaja-con-nosotros.component.html',
  styleUrl: './trabaja-con-nosotros.component.scss'
})
export class TrabajaConNosotrosComponent {
  @ViewChild('trabajaForm') form!: ElementRef;
  
  constructor(private dialog: MatDialog) {
    console.log('Componente TrabajaConNosotros inicializado');
  }

  onSubmit() {
    console.log('=== MÉTODO ONSUBMIT EJECUTADO ===');
    
    // Limpiar el formulario
    this.resetForm();
    
    // Mostrar dialog de Material
    this.dialog.open(SuccessDialogComponent, {
      width: '400px',
      disableClose: true, // No se puede cerrar haciendo clic fuera
      data: {
        title: '¡Envío Exitoso!',
        message: 'El mensaje fue enviado de manera exitosa',
        subtitle: 'Nos pondremos en contacto contigo pronto'
      }
    });
  }

  private resetForm() {
    console.log('Intentando limpiar formulario');
    if (this.form && this.form.nativeElement) {
      this.form.nativeElement.reset();
      console.log('Formulario limpiado exitosamente');
    } else {
      console.log('No se pudo encontrar el formulario');
    }
  }
}

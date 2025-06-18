import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

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

// Componente del dialog
@Component({
  selector: 'app-success-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <div class="success-dialog">
      <div class="dialog-header">
        <h2 mat-dialog-title>{{ data.title }}</h2>
      </div>
      <div mat-dialog-content class="dialog-content">
        <div class="success-icon">✓</div>
        <p>{{ data.message }}</p>
        <p class="subtitle">{{ data.subtitle }}</p>
      </div>
      <div mat-dialog-actions class="dialog-actions">
        <button mat-raised-button color="primary" (click)="close()">Cerrar</button>
      </div>
    </div>
  `,
  styles: [`
    .success-dialog {
      text-align: center;
      padding: 20px;
    }
    
    .dialog-header h2 {
      color: #c7a17a;
      font-family: 'Oswald', sans-serif;
      font-size: 1.5rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 0;
    }
    
    .dialog-content {
      padding: 20px 0;
    }
    
    .success-icon {
      width: 60px;
      height: 60px;
      background: #4caf50;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
      margin: 0 auto 20px auto;
    }
    
    .dialog-content p {
      font-family: 'Oswald', sans-serif;
      font-size: 1.1rem;
      color: #2d2a2a;
      margin: 10px 0;
      font-weight: 400;
    }
    
    .subtitle {
      font-size: 0.9rem;
      color: #888888;
      font-weight: 300;
    }
    
    .dialog-actions {
      justify-content: center;
      padding: 20px 0 0 0;
    }
    
    .dialog-actions button {
      font-family: 'Oswald', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 10px 30px;
    }
  `]
})
export class SuccessDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}

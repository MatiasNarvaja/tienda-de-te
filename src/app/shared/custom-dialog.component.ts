import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="custom-dialog-overlay" (click)="onOverlayClick($event)">
      <div class="custom-dialog-content">
        <h2 *ngIf="title">{{ title }}</h2>
        <p *ngIf="message">{{ message }}</p>
        <p *ngIf="subtitle" class="subtitle">{{ subtitle }}</p>
        <button (click)="closeDialog()">{{ buttonText || 'Cerrar' }}</button>
      </div>
    </div>
  `,
  styles: [`
    .custom-dialog-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .custom-dialog-content {
      background: rgba(255,255,255,0.95);
      border-radius: 12px;
      padding: 24px 20px 20px 20px;
      max-width: 400px;
      width: 90vw;
      text-align: center;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      font-family: 'Oswald', sans-serif;
    }
    h2 {
      color: #c7a17a;
      font-size: 1.5rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 0 0 20px 0;
    }
    p {
      font-size: 1.1rem;
      color: #2d2a2a;
      margin: 10px 0;
      font-weight: 400;
    }
    .subtitle {
      font-size: 0.9rem;
      color: #888888;
      font-weight: 300;
      margin: 10px 0;
    }
    button {
      font-family: 'Oswald', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 10px 30px;
      background: #c7a17a;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 20px;
      font-size: 1rem;
    }
  `]
})
export class CustomDialogComponent {
  @Input() title = '';
  @Input() message = '';
  @Input() subtitle?: string;
  @Input() buttonText?: string;
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeDialog();
    }
  }
} 
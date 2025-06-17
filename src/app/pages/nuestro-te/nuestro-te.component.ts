import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuestro-te',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nuestro-te.component.html',
  styleUrl: './nuestro-te.component.scss'
})
export class NuestroTeComponent {
  title = 'Nuestro Té';
}

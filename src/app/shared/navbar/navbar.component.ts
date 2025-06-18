import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  menuItems = [
    { path: '/tienda', label: 'Nuestro Té' },
    { path: '/tutoriales', label: 'Tutoriales' },
    { path: '/menu-tienda', label: 'Nuestro Menú' },
    { path: '/trabaja-en-tdt', label: 'Trabajá con Nosotros' },
    { path: '/franquicias', label: 'Franquicias' },
    { path: '/contacto', label: 'Contacto' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

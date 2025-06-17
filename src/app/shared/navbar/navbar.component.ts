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
    { path: '/nuestro-te', label: 'Nuestro Té' },
    { path: '/tutoriales', label: 'Tutoriales' },
    { path: '/locales', label: 'Locales' },
    { path: '/nuestro-menu', label: 'Nuestro Menú' },
    { path: '/trabaja-con-nosotros', label: 'Trabajá con Nosotros' },
    { path: '/franquicias', label: 'Franquicias' },
    { path: '/contacto', label: 'Contacto' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

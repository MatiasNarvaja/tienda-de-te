import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuestro-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nuestro-menu.component.html',
  styleUrl: './nuestro-menu.component.scss'
})
export class NuestroMenuComponent {
  selectedCategory = 'todos';

  menuCategories = [
    { id: 'todos', name: 'Todos' },
    { id: 'bebidas', name: 'Bebidas' },
    { id: 'pasteleria', name: 'Pastelería' },
    { id: 'comidas', name: 'Comidas' }
  ];

  menuItems = [
    {
      id: 1,
      name: 'Cappuccino Casero',
      description: 'Cappuccino artesanal preparado con leche espumada y café de especialidad',
      price: '$450',
      category: 'bebidas',
      image: 'assets/images/nuestro-menu/capuccino-casero-1.jpg',
      popular: true
    },
    {
      id: 2,
      name: 'Torta Clásica',
      description: 'Torta casera con crema y frutas frescas de temporada',
      price: '$680',
      category: 'pasteleria',
      image: 'assets/images/nuestro-menu/torta.jpg',
      popular: false
    },
    {
      id: 3,
      name: 'Torta Especial',
      description: 'Torta gourmet con chocolate belga y decoración artesanal',
      price: '$750',
      category: 'pasteleria',
      image: 'assets/images/nuestro-menu/torta-2.jpg',
      popular: true
    },
    {
      id: 4,
      name: 'Brunch Completo',
      description: 'Brunch completo con huevos, tostadas, frutas y café',
      price: '$890',
      category: 'comidas',
      image: 'assets/images/nuestro-menu/brunch.jpg',
      popular: false
    },
    {
      id: 5,
      name: 'Sandwich Veggie',
      description: 'Sandwich vegetariano con vegetales frescos y queso de cabra',
      price: '$520',
      category: 'comidas',
      image: 'assets/images/nuestro-menu/sandwich-veggie.jpg',
      popular: false
    },
    {
      id: 6,
      name: 'Bagel Artesanal',
      description: 'Bagel casero con semillas y acompañado de crema de queso',
      price: '$380',
      category: 'comidas',
      image: 'assets/images/nuestro-menu/bagel.jpg',
      popular: false
    }
  ];

  get filteredItems() {
    if (this.selectedCategory === 'todos') {
      return this.menuItems;
    }
    return this.menuItems.filter(item => item.category === this.selectedCategory);
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }
}

import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeteriaSectionComponent } from '../../shared/cafeteria-section/cafeteria-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CafeteriaSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  slides = [
    {
      image: 'assets/images/slide1.jpg',
      title: 'Nuestro Té',
      description: 'Descubrí nuestra selección de tés premium'
    },
    {
      image: 'assets/images/slide2.jpg',
      title: 'Tradición',
      description: 'Más de 20 años de experiencia en el mundo del té'
    },
    {
      image: 'assets/images/slide3.jpg',
      title: 'Experiencia',
      description: 'Viví la experiencia de tomar el mejor té'
    }
  ];

  teaProducts = [
    {
      name: 'Boldo',
      image: 'assets/images/te-boldo.jpg',
      description: 'Infusión digestiva tradicional de Sudamérica, conocida por sus propiedades hepatoprotectoras y su sabor herbal único.'
    },
    {
      name: 'Frutilla',
      image: 'assets/images/te-frutilla.jpg',
      description: 'Deliciosa mezcla de té negro con frutillas naturales, perfecta para disfrutar en cualquier momento del día con un toque dulce y refrescante.'
    },
    {
      name: 'Earl Grey',
      image: 'assets/images/te-grey.jpg',
      description: 'Clásico té negro aromatizado con bergamota, una mezcla elegante y sofisticada que combina la fuerza del té con notas cítricas exquisitas.'
    },
    {
      name: 'Limón',
      image: 'assets/images/te-limon.jpg',
      description: 'Refrescante infusión cítrica que combina la suavidad del té con el aroma y sabor natural del limón, ideal para despertar los sentidos.'
    },
    {
      name: 'Selection Premium',
      image: 'assets/images/te-selection.jpg',
      description: 'Nuestra selección premium de tés especiales, cuidadosamente curada para ofrecerte las mejores variedades en una experiencia única.'
    },
    {
      name: 'Verde',
      image: 'assets/images/te-verde.jpg',
      description: 'Té verde tradicional rico en antioxidantes, con un sabor suave y herbáceo que promueve el bienestar y la vitalidad natural.'
    }
  ];

  currentSlide = 0;
  currentProductSlide = 0;
  hoveredIndex: number | null = null;
  isMobile = false;

  ngOnInit() {
    this.checkScreenSize();
    this.startSlideShow();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    // Ajustar el slide actual si es necesario
    if (this.isMobile && this.currentProductSlide % 3 !== 0) {
      this.currentProductSlide = Math.floor(this.currentProductSlide / 3) * 3;
    }
  }

  get visibleProducts() {
    const itemsPerView = this.isMobile ? 1 : 3;
    return this.teaProducts.slice(this.currentProductSlide, this.currentProductSlide + itemsPerView);
  }

  get productIndicators(): number[] {
    const itemsPerView = this.isMobile ? 1 : 3;
    return Array.from({ length: Math.ceil(this.teaProducts.length / itemsPerView) }, (_, i) => i);
  }

  get maxProductSlide(): number {
    const itemsPerView = this.isMobile ? 1 : 3;
    return this.teaProducts.length - itemsPerView;
  }

  startSlideShow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia de slide cada 5 segundos
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  nextProductSlide() {
    const itemsPerView = this.isMobile ? 1 : 3;
    const maxSlide = this.teaProducts.length - itemsPerView;
    if (this.currentProductSlide < maxSlide) {
      this.currentProductSlide += itemsPerView;
    }
  }

  previousProductSlide() {
    const itemsPerView = this.isMobile ? 1 : 3;
    if (this.currentProductSlide > 0) {
      this.currentProductSlide -= itemsPerView;
    }
  }

  goToProductSlide(index: number) {
    const itemsPerView = this.isMobile ? 1 : 3;
    this.currentProductSlide = index * itemsPerView;
  }

  onMouseEnter(index: number) {
    this.hoveredIndex = index;
  }

  onMouseLeave() {
    this.hoveredIndex = null;
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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

  currentSlide = 0;

  ngOnInit() {
    this.startSlideShow();
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
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  title: string;
  location: string;
  text: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  autoSlideInterval: any;

  testimonials: Testimonial[] = [
    {
      name: 'Roberta Cardoso',
      title: 'Cirurgiã Dentista',
      location: 'Miami, FL',
      text: 'O método Brazucas foi fundamental para minha aprovação. O suporte do Rodrigo e a metodologia estruturada me deram a confiança necessária para passar no board de primeira. Hoje exerço minha profissão legalmente nos EUA!'
    },
    {
      name: 'Patricia Medrado',
      title: 'Dentista',
      location: 'Orlando, FL',
      text: 'Depois de anos tentando entender o processo sozinha, encontrei no Brazucas a direção que precisava. As aulas são práticas e focadas no que realmente importa para a prova. Recomendo para todos os colegas!'
    },
    {
      name: 'Samantha Matos',
      title: 'Cirurgiã Dentista',
      location: 'Houston, TX',
      text: 'O diferencial do curso é o suporte ilimitado. Sempre que tinha dúvidas, recebia respostas rápidas e detalhadas. Isso fez toda a diferença na minha preparação e aprovação no INBDE.'
    },
    {
      name: 'Aurora Rita',
      title: 'Dentista',
      location: 'Los Angeles, CA',
      text: 'Método validado e eficiente! O Rodrigo conhece profundamente o processo e sabe exatamente o que é necessário para ser aprovado. Hoje tenho meu consultório próprio nos EUA graças ao Brazucas.'
    },
    {
      name: 'Déia Yamamoto',
      title: 'Dentista',
      location: 'New York, NY',
      text: 'A metodologia é clara e objetiva. Não perde tempo com informações desnecessárias, foca no que realmente cai na prova. Os simulados foram essenciais para minha preparação e confiança no dia da prova.'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  nextSlide() {
    if (this.currentSlide < this.testimonials.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
    this.resetAutoSlide();
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.testimonials.length - 1;
    }
    this.resetAutoSlide();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoSlide();
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}


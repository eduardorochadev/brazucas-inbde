import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss'
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      icon: 'fas fa-trophy',
      title: 'Conseguir ser aprovado no Board de primeira',
      description: 'Método validado que aumenta suas chances de aprovação logo na primeira tentativa.'
    },
    {
      icon: 'fas fa-gavel',
      title: 'Exercer a odontologia de forma legal nos EUA',
      description: 'Tenha seu diploma reconhecido e pratique sua profissão legalmente nos Estados Unidos.'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Voltar a viver com qualidade e recebendo o quanto merece',
      description: 'Receba em dólar um salário compatível com a valorização que sua profissão merece.'
    },
    {
      icon: 'fas fa-star',
      title: 'Criar um nome para você no mercado da saúde nos EUA',
      description: 'Construa uma reputação sólida e se destaque no mercado odontológico americano.'
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Superar as burocracias para ser um profissional de saúde na América',
      description: 'Navegue com segurança por todos os processos burocráticos necessários.'
    },
    {
      icon: 'fas fa-medal',
      title: 'Ser reconhecido no Brasil e fora dele como um profissional fora da curva',
      description: 'Ganhe reconhecimento internacional e se torne referência em sua área.'
    }
  ];
}


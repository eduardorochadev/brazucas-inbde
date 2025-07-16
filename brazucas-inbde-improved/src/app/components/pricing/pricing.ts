import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Plan {
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  buttonText: string;
  featured: boolean;
  badge?: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss'
})
export class PricingComponent {
  plans: Plan[] = [
    {
      name: 'Individual',
      description: 'Nesse módulo você terá acesso ao curso por 5 meses, tendo aulas online e ao vivo com acesso a simulados e exercícios.',
      price: 950,
      period: 'valor por cada mês',
      features: [
        '2 encontros na semana de 1h',
        '1 encontro de 3h no grupo geral por semana (com resolução de exercícios)',
        '3 simulados da prova',
        '1 aulão final na véspera da prova (que acontece dia antes) de 3h',
        'Suporte ilimitado via WhatsApp',
        'Material didático completo',
        'Acesso à plataforma por 5 meses'
      ],
      buttonText: 'Quero fazer parte agora',
      featured: true,
      badge: 'MAIS POPULAR'
    }
  ];
}


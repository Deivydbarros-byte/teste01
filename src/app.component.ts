
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Lecture {
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
  imageUrl: string;
  bgColor: string;
  textColor: string;
  keywordColor: string;
  imageOrder: 'left' | 'right';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  lectures = signal<Lecture[]>([
    {
      title: 'Educação Financeira como Ferramenta de Inclusão Social',
      subtitle: 'O impacto de ensinar finanças para reduzir desigualdades e gerar oportunidades. Como a educação financeira pode ser um agente de transformação social, promovendo autonomia, equidade e prosperidade para diferentes grupos.',
      description: 'Como a educação financeira pode ser um agente de transformação social, promovendo autonomia, equidade e prosperidade para diferentes grupos.',
      keywords: ['Equidade', 'Autonomia', 'Oportunidades'],
      imageUrl: 'https://picsum.photos/seed/diversity/800/600', // Placeholder for a diverse group learning
      bgColor: 'bg-sky-500',
      textColor: 'text-white',
      keywordColor: 'text-white',
      imageOrder: 'right'
    },
    {
      title: 'Educação Financeira para a Geração Z',
      subtitle: 'Como formar hábitos financeiros desde cedo pode transformar a relação da nova geração com o dinheiro, o consumo e a carreira.',
      description: 'Uma conversa prática e inspiradora sobre o poder da educação financeira para criar uma geração mais consciente e preparada para o futuro.',
      keywords: ['Consciência', 'Sustentabilidade', 'Hábitos'],
      imageUrl: 'https://picsum.photos/seed/genz/800/600', // Placeholder for young people and technology
      bgColor: 'bg-gray-700',
      textColor: 'text-white',
      keywordColor: 'text-sky-400',
      imageOrder: 'left'
    },
    {
      title: 'O Futuro do Trabalho e o Dinheiro',
      subtitle: 'Como a educação financeira se conecta à empregabilidade e ao empreendedorismo jovem.',
      description: 'Um olhar sobre as habilidades essenciais para prosperar num mercado em constante mudança, entendendo o papel do dinheiro nas novas formas de trabalho.',
      keywords: ['Empregabilidade', 'Competências', 'Adaptabilidade'],
      imageUrl: 'https://picsum.photos/seed/futurework/800/600', // Placeholder for modern work environment
      bgColor: 'bg-sky-500',
      textColor: 'text-white',
      keywordColor: 'text-white',
      imageOrder: 'right'
    },
    {
      title: 'A vida acontece em movimento?',
      subtitle: 'Uma palestra inspiracional que conta a trajetória de Deivyd e mostra como pequenos passos podem levar a grandes conquistas.',
      description: 'Um convite à ação, ao movimento e à coragem de construir novos caminhos.',
      keywords: ['Coragem', 'Trajetória', 'Ação'],
      imageUrl: 'https://picsum.photos/seed/journey/800/600', // Placeholder for an inspirational journey
      bgColor: 'bg-gray-700',
      textColor: 'text-white',
      keywordColor: 'text-sky-400',
      imageOrder: 'left'
    }
  ]);

  audience = {
    gender: [
      { label: 'Homens', value: 71, color: 'bg-sky-400' },
      { label: 'Mulheres', value: 29, color: 'bg-sky-600' }
    ],
    age: [
      { label: '18 a 24 anos', value: '35,7%' },
      { label: '25 a 34 anos', value: '26,9%' },
      { label: '13 a 17 anos', value: '20,7%' },
      { label: '35 a 44 anos', value: '8,9%' }
    ],
    location: [
      { label: 'São Paulo', value: 12 },
      { label: 'Maringá', value: 5 },
      { label: 'Osasco', value: 4 },
      { label: 'Rio de Janeiro', value: 2 }
    ]
  };

  metrics = [
      { value: '78k', label: 'seguidores' },
      { value: '34k', label: 'visualizações' },
      { value: '28%', label: 'de stories' },
      { value: '69%', label: 'de reels' }
  ];
}

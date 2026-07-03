import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-scalable-react-apps',
    title: 'Building Scalable React Apps with Clean Architecture',
    excerpt: 'Patterns and practices that scale from prototype to production.',
    content:
      'Designing a React application for long-term growth starts with separating concerns early. A clear folder structure, reusable UI primitives, and domain-driven state boundaries help the app remain maintainable as features expand.\n\nIn practice, this means keeping presentation and business logic apart, using typed data models, and leaning on small composable components rather than large, fragile ones. When the foundation is strong, teams can ship faster without sacrificing reliability.',
    date: '2025-02-10',
    readingTime: 5,
    tags: ['React', 'Architecture'],
    featured: true,
    image: '/blog/architecture.jpg',
  },
  {
    slug: 'designing-for-performance',
    title: 'Designing for Performance Without Losing Polish',
    excerpt: 'A practical approach to balancing responsiveness, visuals, and user experience.',
    content:
      'Performance is not just about fast load times. It is also about how quickly a product feels responsive once a user starts interacting with it.\n\nSmall details such as lazy-loading images, reducing unnecessary re-renders, and choosing the right animation timing can make a dramatic difference. The goal is to preserve the visual richness of the experience while ensuring the interface remains fluid on both strong and modest devices.',
    date: '2025-05-12',
    readingTime: 4,
    tags: ['Performance', 'UX'],
    featured: false,
  },
];
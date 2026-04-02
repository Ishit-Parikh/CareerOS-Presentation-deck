export type SlideType = 
  | 'title'
  | 'product'
  | 'tech'
  | 'why'
  | 'competitors'
  | 'category'
  | 'monetization'

export interface SlideData {
  id: number
  type: SlideType
  title: string
  subtitle?: string
  shortDescription?: string
}

export const slides: SlideData[] = [
  {
    id: 1,
    type: 'title',
    title: 'CareerOS',
    subtitle: 'Career intelligence platform',
  },
  {
    id: 2,
    type: 'product',
    title: 'Product Overview',
    subtitle: 'What CareerOS does',
    shortDescription: 'CareerOS is a career intelligence platform that helps users make smarter career decisions.',
  },
  {
    id: 3,
    type: 'tech',
    title: 'Tech Stack',
    subtitle: 'Technology powering CareerOS',
  },
  {
    id: 4,
    type: 'why',
    title: 'Why CareerOS?',
    subtitle: 'The problem, expertise, and timing',
  },
  {
    id: 5,
    type: 'competitors',
    title: 'Competitive Landscape',
    subtitle: 'How CareerOS differentiates',
  },
  {
    id: 6,
    type: 'category',
    title: 'B2C SaaS',
    subtitle: 'Company category',
  },
  {
    id: 7,
    type: 'monetization',
    title: 'How We Make Money',
    subtitle: 'Credit system & targeted advertising',
  },
]

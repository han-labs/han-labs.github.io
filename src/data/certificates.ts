export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  proof: string;
  image?: string;
  en?: { name: string; issuer: string };
  vi?: { name: string; issuer: string };
};

export const certificates: Certificate[] = [
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    date: '2025',
    proof: '#todo-aws-cloud-foundations',
    image: '/certificates/aws-cloud-foundations.png',
  },
  {
    name: 'AWS Academy Cloud Web Application Builder',
    issuer: 'AWS Academy',
    date: '2025',
    proof: '#todo-aws-cloud-web-builder',
    image: '/certificates/aws-web-builder.png',
  },
  {
    name: 'AWS Academy Machine Learning for Natural Language Processing',
    issuer: 'AWS Academy',
    date: '2025',
    proof: '#todo-aws-ml-nlp',
    image: '/certificates/aws-ml-nlp.png',
  },
  {
    name: 'Development and Operations System Course',
    issuer: 'VTI Academy',
    date: '2025',
    proof: '#todo-vti-devops',
  },
  {
    name: 'Agile/Scrum Training Certificate',
    issuer: 'Axon Active',
    en: {
      name: 'Agile/Scrum Training Certificate',
      issuer: 'Axon Active',
    },
    vi: {
      name: 'Chứng chỉ Đào tạo Agile/Scrum',
      issuer: 'Axon Active',
    },
    date: '2026',
    proof: '#todo-agile-scrum',
  },
];

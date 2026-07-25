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
    name: 'EF SET English Certificate, C1',
    issuer: 'EF SET',
    date: 'Jul 2026',
    proof: '#todo-ef-set-c1',
    vi: {
      name: 'Chứng chỉ tiếng Anh EF SET, C1',
      issuer: 'EF SET',
    },
  },
  {
    name: 'Software Development With Scrum Certificate',
    issuer: 'Axon Active',
    date: 'May 2026',
    proof: '#todo-scrum',
    vi: {
      name: 'Chứng chỉ Phát triển phần mềm với Scrum',
      issuer: 'Axon Active',
    },
  },
  {
    name: 'Development and Operations System Program',
    issuer: 'VTI Academy',
    date: 'Dec 2025',
    proof: '#todo-vti-devops',
    vi: {
      name: 'Chương trình Development and Operations System',
      issuer: 'VTI Academy',
    },
  },
  {
    name: 'Cloud Foundations & Cloud Web Application Builder',
    issuer: 'AWS Academy',
    date: 'Oct 2025',
    proof: '#todo-aws-cloud',
    image: '/certificates/aws-cloud-foundations.png',
    vi: {
      name: 'Cloud Foundations & Cloud Web Application Builder',
      issuer: 'AWS Academy',
    },
  },
];

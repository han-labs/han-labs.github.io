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
    name: 'EF SET English Certificate · C1 Advanced',
    issuer: 'EF SET',
    date: '22 Jul 2026',
    proof: 'https://cert.efset.org/S3iy7S',
    image: '/certificates/HuynhGiaHan_EF_English_cert.jpg',
    vi: {
      name: 'Chứng chỉ tiếng Anh EF SET · C1 Advanced',
      issuer: 'EF SET',
    },
  },
  {
    name: 'Software Development With Scrum',
    issuer: 'Axon Active Vietnam',
    date: 'May 2026',
    proof: '#todo-scrum',
    image: '/certificates/scrum_cert.png',
    vi: {
      name: 'Phát triển phần mềm với Scrum',
      issuer: 'Axon Active Vietnam',
    },
  },
  {
    name: 'Development and Operations System Program',
    issuer: 'VTI Academy',
    date: 'Dec 2025',
    proof: '#todo-vti-devops',
    image: '/certificates/development-and-operations-cert.jpg',
    vi: {
      name: 'Chương trình Development and Operations System',
      issuer: 'VTI Academy',
    },
  },
  {
    name: 'Eureka Student Scientific Research Award 2025',
    issuer: 'Ho Chi Minh City Youth Union · VNU-HCM',
    date: '29 Oct 2025',
    proof: '#todo-eureka',
    image: '/certificates/eureka_cert.jpg',
    vi: {
      name: 'Giải thưởng Sinh viên Nghiên cứu Khoa học Eureka 2025',
      issuer: 'Thành Đoàn TP.HCM · ĐHQG-HCM',
    },
  },
  {
    name: 'Machine Learning for Natural Language Processing',
    issuer: 'AWS Academy',
    date: '11 Oct 2025',
    proof: '#todo-aws-ml-nlp',
    image: '/certificates/aws-ml-nlp.png',
  },
  {
    name: 'Cloud Web Application Builder',
    issuer: 'AWS Academy',
    date: '08 Oct 2025',
    proof: '#todo-aws-web-builder',
    image: '/certificates/aws-web-builder.png',
  },
  {
    name: 'Cloud Foundations',
    issuer: 'AWS Academy',
    date: '02 Oct 2025',
    proof: '#todo-aws-cloud-foundations',
    image: '/certificates/aws-cloud-foundations.png',
  },
];

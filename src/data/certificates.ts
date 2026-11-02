export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  kind: 'award' | 'scholarship' | 'certificate';
  proof: string;
  image: string;
  document?: string;
  details?: { en: string; vi: string };
  en?: { name: string; issuer: string };
  vi?: { name: string; issuer: string };
};

export const certificates: Certificate[] = [
  {
    name: 'TOEIC Listening & Reading · 785/990',
    issuer: 'ETS · IIG Vietnam',
    date: '07 Oct 2026',
    kind: 'certificate',
    proof: '/certificates/toeic-785.pdf',
    document: '/certificates/toeic-785.pdf',
    image: '/certificates/toeic-785.png',
    details: {
      en: 'Listening: 405/495 · Reading: 380/495 · Valid until 07 Oct 2028.',
      vi: 'Nghe: 405/495 · Đọc: 380/495 · Có giá trị đến 07/10/2028.',
    },
    vi: {
      name: 'TOEIC Nghe & Đọc · 785/990',
      issuer: 'ETS · IIG Việt Nam',
    },
  },
  {
    name: 'Software Development With Scrum · Certificate',
    issuer: 'Axon Active Vietnam',
    date: 'Jul 2026',
    kind: 'certificate',
    proof: '#todo-scrum',
    image: '/certificates/scrum_cert.png',
    vi: {
      name: 'Chứng chỉ Phát triển phần mềm với Scrum',
      issuer: 'Axon Active Vietnam',
    },
  },
  {
    name: 'Development and Operations System · Certificate',
    issuer: 'VTI Academy',
    date: 'May 2026',
    kind: 'certificate',
    proof: '#todo-vti-devops',
    image: '/certificates/development-and-operations-cert.jpg',
    vi: {
      name: 'Chứng chỉ Development and Operations System',
      issuer: 'VTI Academy',
    },
  },
  {
    name: 'The 9th Chien Hsing Industrial Technology Scholarship',
    issuer: 'Vietnam Taiwanese Entrepreneurs Scholarship Foundation · TECO in HCMC',
    date: '23 Oct 2026',
    kind: 'scholarship',
    proof: '/awards/chien-hsing-scholarship-2026.jpg',
    image: '/awards/chien-hsing-scholarship-2026.jpg',
    vi: {
      name: 'Học bổng Kỹ thuật Công nghiệp Chấn hưng Việt Nam lần thứ IX',
      issuer: 'Hội Khuyến học Thương gia Đài Loan tại Việt Nam · Phòng Giáo dục, TECO tại TP.HCM',
    },
  },
  {
    name: 'Digiworld “Uom Mam Xanh” · Java Backend Full Scholarship',
    issuer: 'Digiworld · VTI Academy',
    date: '2025',
    kind: 'scholarship',
    proof: '#todo-digiworld-scholarship',
    image: '/awards/digiworld-scholarship.jpg',
    vi: {
      name: 'Học bổng toàn phần Java Backend · Digiworld “Ươm Mầm Xanh”',
      issuer: 'Digiworld · VTI Academy',
    },
  },
  {
    name: 'Nguyen Truong To Scholarship · 2024–2025',
    issuer: 'VNHELP',
    date: '2024–2025',
    kind: 'scholarship',
    proof: '#todo-nguyen-truong-to',
    image: '/awards/ntt-scholarship.jpg',
    vi: {
      name: 'Học bổng Nguyễn Trường Tộ · Năm học 2024–2025',
      issuer: 'VNHELP',
    },
  },
  {
    name: 'Eureka XXVII 2025 · Participation Certificate',
    issuer: 'Ho Chi Minh City Youth Union · VNU-HCM',
    date: '29 Oct 2025',
    kind: 'certificate',
    proof: '#todo-eureka',
    image: '/certificates/eureka_cert.jpg',
    vi: {
      name: 'Chứng nhận tham gia Giải thưởng Eureka XXVII 2025',
      issuer: 'Thành Đoàn TP.HCM · ĐHQG-HCM',
    },
  },
  {
    name: 'Undergraduate Scientific Research · Project Defense Certificate',
    issuer: 'HCM-UTE',
    date: '30 Jul 2025',
    kind: 'certificate',
    proof: '#todo-undergraduate-research',
    image: '/certificates/nckh-cert.jpg',
    vi: {
      name: 'Chứng nhận bảo vệ đề tài Nghiên cứu khoa học sinh viên',
      issuer: 'HCM-UTE',
    },
  },
  {
    name: 'C Prize · School-level English Competition',
    issuer: 'Thanh My Tay High School',
    date: '20 May 2021',
    kind: 'award',
    proof: '#todo-english-c-prize',
    image: '/awards/c-prize-english-contest-highschool-level.jpg',
    vi: {
      name: 'Giải C · Kỳ thi học sinh giỏi Tiếng Anh cấp trường',
      issuer: 'Trường THPT Thạnh Mỹ Tây',
    },
  },
  {
    name: 'First Prize · District-level Informatics Competition',
    issuer: 'Chau Phu District Department of Education and Training',
    date: 'Jun 2020',
    kind: 'award',
    proof: '#todo-informatics-first-prize',
    image: '/awards/1st-prize-hsg-tin-hoc.jpg',
    vi: {
      name: 'Giải Nhất · Kỳ thi học sinh giỏi Tin học cấp huyện',
      issuer: 'Phòng Giáo dục và Đào tạo huyện Châu Phú',
    },
  },
  {
    name: 'AWS Academy Graduate · Machine Learning for Natural Language Processing',
    issuer: 'AWS Academy',
    date: '11 Oct 2025',
    kind: 'certificate',
    proof: '#todo-aws-ml-nlp',
    image: '/certificates/aws-ml-nlp-cert.png',
  },
  {
    name: 'AWS Academy Graduate · Cloud Web Application Builder',
    issuer: 'AWS Academy',
    date: '08 Oct 2025',
    kind: 'certificate',
    proof: '#todo-aws-web-builder',
    image: '/certificates/aws-web-builder-cert.png',
  },
  {
    name: 'AWS Academy Graduate · Cloud Foundations',
    issuer: 'AWS Academy',
    date: '02 Oct 2025',
    kind: 'certificate',
    proof: '#todo-aws-cloud-foundations',
    image: '/certificates/aws-cloud-foundations-cert.png',
  },
];

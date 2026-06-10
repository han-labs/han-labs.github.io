export const projects = [
  {
    name: 'Online Academy Website',
    status: 'Completed',
    period: '03/2026 – 05/2026',
    description:
      'Full-stack e-learning platform for course browsing, enrollment, instructor course management, learning progress tracking, and reviews.',
    highlights: [
      'Built backend APIs, PostgreSQL schema, authentication/RBAC',
      'Deployed with Docker, Nginx, and AWS EC2',
      'Validated 6 critical routes with 6/6 smoke tests passed',
    ],
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'Nginx', 'AWS EC2', 'GitHub Actions', 'Render'],
    image: '/assets/online-academy-thumbnail.png',
    github: 'https://github.com/han-labs/online-academy-devops-case-study.git',
    demo: 'https://online-academy-hnnq.onrender.com',
    caseStudy: '#writing',
  },
  {
    name: 'PeerGrade Hub',
    status: 'In Progress',
    period: '2026',
    description: 'Peer review assessment management system for HCMUTE courses.',
    highlights: [
      'Building backend foundations with Java 17 and Spring Boot',
      'Using Spring Security, Spring Data JPA, Flyway, and PostgreSQL',
      'Local development environment runs with Docker Compose',
    ],
    tech: ['Java 17', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Flyway', 'PostgreSQL', 'React', 'Docker Compose'],
    image: '/assets/peergrade-placeholder.svg',
    github: '#todo-peergrade-github',
    demo: '',
    caseStudy: '#writing',
  },
];

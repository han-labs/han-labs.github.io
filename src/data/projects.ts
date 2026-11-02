export type ProjectMedia = {
  src: string;
  alt: { en: string; vi: string };
  caption?: { en: string; vi: string };
};

export type ProjectResource = {
  label: string;
  href: string;
};

export type LocalizedProject = {
  status: string;
  summary: string;
  role: string;
  contribution: string;
};

export type Project = {
  slug: string;
  name: string;
  period?: string;
  tech: string[];
  image?: string;
  github?: string;
  live?: string;
  resources: ProjectResource[];
  gallery: ProjectMedia[];
  en: LocalizedProject;
  vi: LocalizedProject;
};

export const projects: Project[] = [
  {
    slug: 'career-simulation',
    name: 'AI-Integrated Career Simulation',
    period: '08/2026 – Present',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'pgvector', 'Docker Compose', 'Gemini Embedding API', 'LLM API Integration'],
    resources: [],
    gallery: [],
    en: {
      status: 'Ongoing · Eduz',
      summary: 'An AI-integrated career simulation platform with a RAG knowledge base and a tool-using LLM agent.',
      role: 'Eduz Company Limited · Software Engineer Intern',
      contribution: 'Led a team in system design; developed and tested an end-to-end RAG knowledge base and a tool-using LLM agent. Incorporated access control, prompt-injection checks, and output validation guardrails to support reliable AI behavior. The implementation combines a Java Spring Boot backend, React workflows, PostgreSQL with pgvector, Gemini embeddings, and LLM API integration.',
    },
    vi: {
      status: 'Đang thực hiện · Eduz',
      summary: 'Nền tảng mô phỏng nghề nghiệp tích hợp AI với knowledge base RAG và LLM agent sử dụng công cụ.',
      role: 'Công ty TNHH Eduz · Software Engineer Intern',
      contribution: 'Dẫn dắt nhóm trong thiết kế hệ thống; phát triển và kiểm thử knowledge base RAG và LLM agent sử dụng công cụ xuyên suốt. Tích hợp kiểm soát truy cập, kiểm tra prompt injection và xác thực đầu ra để hỗ trợ hành vi AI đáng tin cậy. Hệ thống kết hợp Backend Java Spring Boot, các luồng React, PostgreSQL với pgvector, Gemini embeddings và tích hợp LLM API.',
    },
  },
  {
    slug: 'peergradehub',
    name: 'PeerGradeHub',
    period: '03/2026 – 06/2026',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'MySQL', 'Flyway', 'Docker', 'React'],
    image: '/assets/peergrade-hub-thumbnail.png',
    github: 'https://github.com/han-labs/peer-grade-hub',
    live: 'https://peer-grade-hub-frontend.vercel.app',
    resources: [],
    gallery: [],
    en: {
      status: 'Deployed',
      summary: 'Peer-review assessment management system for university courses.',
      role: 'Group project · Backend Developer',
      contribution: 'Led team delivery and implemented two end-to-end use cases—Monitor Progress and Assign Peer Review—from UML and specifications to full-stack development, testing, and public deployment.',
    },
    vi: {
      status: 'Đã triển khai',
      summary: 'Hệ thống quản lý đánh giá đồng cấp dành cho các học phần đại học.',
      role: 'Dự án nhóm · Lập trình viên Backend',
      contribution: 'Điều phối quá trình bàn giao của nhóm và triển khai hai use case hoàn chỉnh—Theo dõi tiến độ và Phân công đánh giá đồng cấp—từ UML, đặc tả đến phát triển full-stack, kiểm thử và triển khai công khai.',
    },
  },
  {
    slug: 'pocket',
    name: 'Pocket',
    tech: ['Java', 'Android SDK', 'MVVM', 'Firebase', 'CameraX', 'Cloudinary', 'Retrofit', 'OkHttp'],
    image: '/assets/pocket-thumbnail.png',
    github: 'https://github.com/FlynnBui399/MOPR-NHOM03',
    resources: [],
    gallery: [],
    en: {
      status: 'Completed',
      summary: 'Java Android application for sharing photos and videos, messaging friends, receiving notifications, and generating AI-assisted captions.',
      role: 'Group project · Android Developer',
      contribution: 'Developed and tested camera capture and media upload flows, implemented reaction features, and supported Gemini-powered caption generation using CameraX, Cloudinary, PhotoRepository, and ImageUtils.',
    },
    vi: {
      status: 'Hoàn thành',
      summary: 'Ứng dụng Android viết bằng Java để chia sẻ ảnh và video, nhắn tin với bạn bè, nhận thông báo và tạo chú thích với sự hỗ trợ của AI.',
      role: 'Dự án nhóm · Lập trình viên Android',
      contribution: 'Phát triển và kiểm thử luồng chụp ảnh, tải media; triển khai tính năng tương tác và hỗ trợ tạo chú thích bằng Gemini với CameraX, Cloudinary, PhotoRepository và ImageUtils.',
    },
  },
  {
    slug: 'online-academy',
    name: 'Online Academy',
    period: '03/2026 – 05/2026',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'AWS EC2'],
    image: '/assets/online-academy-thumbnail.png',
    github: 'https://github.com/han-labs/online-academy-devops-case-study',
    live: 'https://online-academy-hnnq.onrender.com',
    resources: [],
    gallery: [],
    en: {
      status: 'Completed',
      summary: 'Full-stack learning platform for course discovery, enrollment, progress tracking, and reviews.',
      role: 'Group project · Full-stack Developer',
      contribution: 'Built REST APIs, authentication, role-based access control, and the relational data model; tested core user flows and deployed the application for public access.',
    },
    vi: {
      status: 'Hoàn thành',
      summary: 'Nền tảng học tập full-stack hỗ trợ tìm kiếm khóa học, ghi danh, theo dõi tiến độ và đánh giá.',
      role: 'Dự án nhóm · Lập trình viên Full-stack',
      contribution: 'Xây dựng REST API, xác thực, phân quyền theo vai trò và mô hình dữ liệu quan hệ; kiểm thử các luồng người dùng cốt lõi và triển khai ứng dụng để truy cập công khai.',
    },
  },
];

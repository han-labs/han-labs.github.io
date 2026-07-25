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
  github: string;
  live?: string;
  resources: ProjectResource[];
  gallery: ProjectMedia[];
  en: LocalizedProject;
  vi: LocalizedProject;
};

export const projects: Project[] = [
  {
    slug: 'peergradehub',
    name: 'PeerGradeHub',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'MySQL', 'Flyway', 'Docker', 'React'],
    image: '/assets/peergrade-placeholder.svg',
    github: 'https://github.com/han-labs/peer-grade-hub',
    live: 'https://peer-grade-hub-frontend.vercel.app',
    resources: [],
    gallery: [],
    en: {
      status: 'Deployed',
      summary: 'Peer-review assessment management system for university courses.',
      role: 'Group project · Backend developer',
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
    slug: 'ownflow',
    name: 'Ownflow',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'Spring Data JPA', 'Maven', 'Flyway', 'OpenAPI', 'React'],
    github: 'https://github.com/han-labs/ownflow',
    resources: [],
    gallery: [],
    en: {
      status: 'In development',
      summary: 'Evidence-aware learning platform designed to help software students understand and explain their Java Spring Boot projects through guided study and practice.',
      role: 'Sole developer',
      contribution: 'Designed, implemented, and tested the application end to end, from requirements and system architecture to backend APIs, database integration, frontend workflows, and deployment preparation.',
    },
    vi: {
      status: 'Đang phát triển',
      summary: 'Nền tảng học tập dựa trên minh chứng, giúp sinh viên phần mềm hiểu và trình bày dự án Java Spring Boot thông qua quá trình học và thực hành có hướng dẫn.',
      role: 'Lập trình viên độc lập',
      contribution: 'Thiết kế, triển khai và kiểm thử ứng dụng xuyên suốt từ yêu cầu, kiến trúc hệ thống đến API Backend, tích hợp cơ sở dữ liệu, luồng Frontend và chuẩn bị triển khai.',
    },
  },
  {
    slug: 'pocket',
    name: 'Pocket',
    tech: ['Java', 'Android SDK', 'MVVM', 'Firebase', 'CameraX', 'Cloudinary', 'Retrofit', 'OkHttp'],
    github: 'https://github.com/FlynnBui399/MOPR-NHOM03',
    resources: [],
    gallery: [],
    en: {
      status: 'Completed',
      summary: 'Java Android application for sharing photos and videos, messaging friends, receiving notifications, and generating AI-assisted captions.',
      role: 'Group project · Java developer',
      contribution: 'Developed and tested camera capture and media upload flows, implemented reaction features, and supported Gemini-powered caption generation using CameraX, Cloudinary, PhotoRepository, and ImageUtils.',
    },
    vi: {
      status: 'Hoàn thành',
      summary: 'Ứng dụng Android viết bằng Java để chia sẻ ảnh và video, nhắn tin với bạn bè, nhận thông báo và tạo chú thích với sự hỗ trợ của AI.',
      role: 'Dự án nhóm · Lập trình viên Java',
      contribution: 'Phát triển và kiểm thử luồng chụp ảnh, tải media; triển khai tính năng tương tác và hỗ trợ tạo chú thích bằng Gemini với CameraX, Cloudinary, PhotoRepository và ImageUtils.',
    },
  },
  {
    slug: 'online-academy',
    name: 'Online Academy',
    period: 'Mar 2026 – May 2026',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'AWS EC2'],
    image: '/assets/online-academy-thumbnail.png',
    github: 'https://github.com/han-labs/online-academy-devops-case-study',
    live: 'https://online-academy-hnnq.onrender.com',
    resources: [],
    gallery: [],
    en: {
      status: 'Completed',
      summary: 'Full-stack learning platform for course discovery, enrollment, progress tracking, and reviews.',
      role: 'Team project · Backend and deployment',
      contribution: 'Built REST APIs, authentication, role-based access control, and the relational data model; tested core user flows and deployed the application for public access.',
    },
    vi: {
      status: 'Hoàn thành',
      summary: 'Nền tảng học tập full-stack hỗ trợ tìm kiếm khóa học, ghi danh, theo dõi tiến độ và đánh giá.',
      role: 'Dự án nhóm · Backend và triển khai',
      contribution: 'Xây dựng REST API, xác thực, phân quyền theo vai trò và mô hình dữ liệu quan hệ; kiểm thử các luồng người dùng cốt lõi và triển khai ứng dụng để truy cập công khai.',
    },
  },
];

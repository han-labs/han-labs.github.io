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
  overview?: string;
  findings?: string;
};

export type Project = {
  slug: string;
  name: string;
  period?: string;
  tech: string[];
  image?: string;
  imageFit?: 'contain' | 'cover';
  github?: string;
  live?: string;
  resources: ProjectResource[];
  gallery: ProjectMedia[];
  en: LocalizedProject;
  vi: LocalizedProject;
};

export const projects: Project[] = [
  {
    slug: 'emovis',
    name: 'EmoViS',
    period: '05/2026 – 09/2026',
    tech: ['Python', 'PyTorch', 'ViSoBERT', 'Hugging Face', 'Emoji2Vec', 'Multi-label NLP'],
    image: '/assets/emovis-thumbnail.png',
    imageFit: 'contain',
    github: 'https://github.com/FlynnBui399/vietnamese-emoji-emotion-recognition',
    resources: [{ label: 'Paper PDF', href: '/EmoViS-Public.pdf' }],
    gallery: [],
    en: {
      status: 'Research · AMI 2026',
      summary: 'Emoji-augmented ViSoBERT for fine-grained, multi-label emotion recognition in Vietnamese social media text.',
      role: 'Group research · Researcher, co-author & co-presenter',
      contribution: 'Reviewed related work, reproduced and evaluated the ViSoBERT baseline with PyTorch and Hugging Face Transformers, supported data preparation and annotation, and co-authored and co-presented the paper.',
      overview: 'A dual-branch system combines normalized-text representations from ViSoBERT with fixed Emoji2Vec features. The study evaluates 28 emotion labels on ViGoEmotions using multiple seeds, validation-selected thresholds, ablations, and paired bootstrap comparisons. The paper was accepted at AMI 2026; the project reached the 28th Euréka semifinals.',
      findings: 'The historical probability ensemble reports Macro-F1 0.6329 and mAP 0.6875 on 2,067 test comments. These are complete-pipeline results: controlled comparisons do not establish a statistically significant improvement from the emoji branch alone over the stronger baseline. The public paper documents both the findings and their limitations.',
    },
    vi: {
      status: 'Nghiên cứu · AMI 2026',
      summary: 'Kết hợp emoji và ViSoBERT để nhận diện cảm xúc chi tiết, đa nhãn trên văn bản mạng xã hội tiếng Việt.',
      role: 'Nghiên cứu nhóm · Thành viên, đồng tác giả & đồng trình bày',
      contribution: 'Tổng quan công trình liên quan, tái lập và đánh giá baseline ViSoBERT với PyTorch và Hugging Face Transformers, hỗ trợ chuẩn bị và gán nhãn dữ liệu, đồng tác giả và cùng trình bày bài báo.',
      overview: 'Hệ thống hai nhánh kết hợp biểu diễn văn bản chuẩn hóa từ ViSoBERT với đặc trưng Emoji2Vec cố định. Nghiên cứu đánh giá 28 nhãn cảm xúc trên ViGoEmotions bằng nhiều seed, ngưỡng chọn trên tập validation, ablation và paired bootstrap. Bài báo được chấp nhận tại AMI 2026; đề tài vào bán kết Euréka lần thứ 28.',
      findings: 'Probability ensemble trong lần chạy gốc đạt Macro-F1 0.6329 và mAP 0.6875 trên 2.067 bình luận kiểm thử. Đây là kết quả của toàn bộ pipeline: các so sánh có kiểm soát chưa chứng minh nhánh emoji riêng lẻ cải thiện có ý nghĩa thống kê so với baseline mạnh hơn. Bản PDF công khai trình bày cả kết quả và giới hạn của nghiên cứu.',
    },
  },
  {
    slug: 'career-simulation',
    name: 'AI-Integrated Career Simulation',
    period: '08/2026 – Present',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'pgvector', 'Docker Compose', 'Gemini Embedding API', 'LLM API Integration'],
    github: 'https://github.com/han-labs/career-simulation-platform',
    resources: [],
    gallery: [],
    en: {
      status: 'Ongoing · Eduz',
      summary: 'An AI-integrated career simulation platform with a RAG knowledge base and a tool-using LLM agent.',
      role: 'Eduz Company Limited · Software Engineer Intern',
      contribution: 'Led a team in system design; developed and tested an end-to-end RAG knowledge base and a tool-using LLM agent. Incorporated access control, prompt-injection checks, and output validation guardrails to support reliable AI behavior. The implementation combines a Java Spring Boot backend, React workflows, PostgreSQL with pgvector, Gemini embeddings, and LLM API integration.',
      overview: 'Students explore career paths through self-assessments, job simulations, and an AI assistant grounded in authorized application data. Admin Studio manages knowledge bases, agents, and AI usage; the interface supports Vietnamese and English. The repository provides a Docker Compose setup for local operation.',
    },
    vi: {
      status: 'Đang thực hiện · Eduz',
      summary: 'Nền tảng mô phỏng nghề nghiệp tích hợp AI với knowledge base RAG và LLM agent sử dụng công cụ.',
      role: 'Công ty TNHH Eduz · Software Engineer Intern',
      contribution: 'Dẫn dắt nhóm trong thiết kế hệ thống; phát triển và kiểm thử knowledge base RAG và LLM agent sử dụng công cụ xuyên suốt. Tích hợp kiểm soát truy cập, kiểm tra prompt injection và xác thực đầu ra để hỗ trợ hành vi AI đáng tin cậy. Hệ thống kết hợp Backend Java Spring Boot, các luồng React, PostgreSQL với pgvector, Gemini embeddings và tích hợp LLM API.',
      overview: 'Sinh viên khám phá định hướng nghề nghiệp qua tự đánh giá, mô phỏng công việc và trợ lý AI dựa trên dữ liệu ứng dụng được cấp quyền. Admin Studio quản lý knowledge base, agent và mức sử dụng AI; giao diện hỗ trợ tiếng Việt và tiếng Anh. Repository cung cấp cấu hình Docker Compose để chạy cục bộ.',
    },
  },
  {
    slug: 'retinaseg',
    name: 'RetinaSeg',
    period: '10/2024 – 10/2025',
    tech: ['Python', 'FastAPI', 'PyTorch', 'U-Net++', 'EfficientNet-B4', 'OpenCV', 'Docker'],
    image: '/assets/retinaseg-thumbnail.png',
    imageFit: 'contain',
    github: 'https://github.com/han-labs/retinal-segmentation-service',
    resources: [],
    gallery: [],
    en: {
      status: 'Research · Euréka 2025',
      summary: 'High-resolution retinal vessel segmentation, connected to an interactive FastAPI web service.',
      role: 'Group research · Researcher, co-author & co-presenter',
      contribution: 'Reviewed literature, evaluated deep-learning segmentation models, co-authored the research report, and served as a co-presenter. The accompanying repository demonstrates how the model can be accessed through a web interface and API.',
      overview: 'The service uses U-Net++ with an EfficientNet-B4 backbone and patch-based inference for large retinal fundus images. A Bootstrap interface supports image upload and sample inputs; FastAPI serves inference, and Docker packages the application. The research was rated “Very Good” at university level and reached the 27th Euréka semifinals.',
      findings: 'A research and engineering demonstration of retinal image analysis, rather than a clinically validated diagnostic product.',
    },
    vi: {
      status: 'Nghiên cứu · Euréka 2025',
      summary: 'Phân đoạn mạch máu võng mạc độ phân giải cao, kết nối với dịch vụ web tương tác bằng FastAPI.',
      role: 'Nghiên cứu nhóm · Thành viên, đồng tác giả & đồng trình bày',
      contribution: 'Tổng quan tài liệu, đánh giá mô hình phân đoạn bằng deep learning, đồng viết báo cáo và cùng trình bày kết quả. Repository đi kèm minh họa việc đưa mô hình lên giao diện web và API.',
      overview: 'Dịch vụ dùng U-Net++ với backbone EfficientNet-B4 và suy luận theo patch cho ảnh đáy mắt kích thước lớn. Giao diện Bootstrap hỗ trợ tải ảnh và dữ liệu mẫu; FastAPI phục vụ suy luận, Docker đóng gói ứng dụng. Đề tài đạt loại “Rất tốt” cấp trường và vào bán kết Euréka lần thứ 27.',
      findings: 'Bản minh họa nghiên cứu và triển khai kỹ thuật cho phân tích ảnh võng mạc, chưa phải sản phẩm chẩn đoán được kiểm định lâm sàng.',
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

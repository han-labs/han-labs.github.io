export const projects = [
  {
    name: 'Online Academy',
    period: 'Mar 2026 – May 2026',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'AWS EC2'],
    image: '/assets/online-academy-thumbnail.png',
    github: 'https://github.com/han-labs/online-academy-devops-case-study.git',
    live: 'https://online-academy-hnnq.onrender.com',
    en: {
      status: 'Completed',
      description: 'A full-stack learning platform for course discovery, enrollment, progress tracking, and reviews.',
      highlights: [
        'Built APIs, authentication, role-based access, and the relational data model',
        'Tested core user flows and deployed the application for public access',
      ]
    },
    vi: {
      status: 'Hoàn thành',
      description: 'Nền tảng học tập toàn diện hỗ trợ tìm kiếm khoá học, ghi danh, theo dõi tiến độ và đánh giá.',
      highlights: [
        'Xây dựng các API, xác thực người dùng, phân quyền truy cập và mô hình dữ liệu quan hệ',
        'Kiểm thử các luồng người dùng cốt lõi và triển khai ứng dụng cho cộng đồng truy cập',
      ]
    }
  },
  {
    name: 'PeerGrade Hub',
    period: '2026',
    tech: ['Java 17', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Flyway', 'MySQL'],
    image: '/assets/peergrade-placeholder.svg',
    github: '#todo-peergrade-github',
    live: '#todo-peergrade-live',
    en: {
      status: 'In Progress',
      description: 'A peer-assessment platform for managing courses, review assignments, submissions, and feedback.',
      highlights: [
        'Developing a layered Java backend with Spring Boot and Spring Security',
        'Managing relational data and schema changes with MySQL, JPA, and Flyway',
      ]
    },
    vi: {
      status: 'Đang thực hiện',
      description: 'Nền tảng đánh giá chéo giữa các học viên nhằm quản lý khoá học, bài tập nộp, bài đánh giá và phản hồi.',
      highlights: [
        'Phát triển ứng dụng backend Java phân tầng sử dụng Spring Boot và Spring Security',
        'Quản lý dữ liệu quan hệ và thay đổi cấu trúc bảng cơ sở dữ liệu bằng MySQL, JPA và Flyway',
      ]
    }
  },
  {
    name: 'Veriflow',
    period: '2026',
    tech: ['Java 17', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Flyway', 'PostgreSQL'],
    image: '/assets/proof-placeholder.svg',
    github: '#todo-veriflow-github',
    live: '#todo-veriflow-live',
    en: {
      status: 'In Progress',
      description: 'A workflow platform for organizing verification requests, review steps, decisions, and progress.',
      highlights: [
        'Building secure REST endpoints around structured verification workflows',
        'Using PostgreSQL for reliable relational data and auditable status changes',
      ]
    },
    vi: {
      status: 'Đang thực hiện',
      description: 'Nền tảng quy trình làm việc nhằm tổ chức các yêu cầu xác minh, các bước xem xét, quyết định phê duyệt và tiến độ.',
      highlights: [
        'Xây dựng các điểm cuối REST bảo mật xung quanh luồng quy trình xác minh cấu trúc',
        'Sử dụng PostgreSQL để đảm bảo an toàn dữ liệu quan hệ và khả năng kiểm toán các thay đổi trạng thái',
      ]
    }
  }
];

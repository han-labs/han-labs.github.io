import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'en' | 'vi';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  // Navigation Links
  'nav.about': { en: 'About', vi: 'Giới thiệu' },
  'nav.skills': { en: 'Skills', vi: 'Kỹ năng' },
  'nav.projects': { en: 'Projects & Research', vi: 'Dự án & Nghiên cứu' },
  'nav.achievements': { en: 'Timeline', vi: 'Dòng thời gian' },
  'nav.beyond': { en: 'Beyond', vi: 'Bên lề' },
  'nav.certificates': { en: 'Achievements', vi: 'Thành tựu' },
  'nav.contact': { en: 'Contact', vi: 'Liên hệ' },

  // Hero / General buttons
  'hero.viewcv': { en: 'View Resume', vi: 'Xem CV' },
  'hero.github': { en: 'GitHub', vi: 'GitHub' },
  'hero.linkedin': { en: 'LinkedIn', vi: 'LinkedIn' },
  'hero.viewprojects': { en: 'View Projects', vi: 'Xem Dự án' },
  'hero.emailme': { en: 'Email Me', vi: 'Gửi email' },
  'hero.emailaddress': { en: 'Email address', vi: 'Địa chỉ Email' },
  'hero.copyemail': { en: 'Copy Email', vi: 'Sao chép' },
  'hero.copied': { en: 'Copied!', vi: 'Đã chép!' },
  'hero.openmail': { en: 'Open Mail App', vi: 'Gửi Mail' },

  // Section titles & eyebrows
  'about.eyebrow': { en: 'About', vi: 'Giới thiệu' },
  'about.title': { en: 'Learning with purpose, building with care.', vi: 'Học tập có định hướng, lập trình bằng tâm huyết.' },
  
  'skills.eyebrow': { en: 'Skills', vi: 'Kỹ năng' },
  'skills.title': { en: 'The stack I work with.', vi: 'Công nghệ tôi sử dụng.' },

  'contribute.eyebrow': { en: 'Contribute', vi: 'Đóng góp' },
  'contribute.title': { en: 'What I can bring to a team.', vi: 'Những gì tôi có thể đóng góp cho đội ngũ.' },

  'projects.eyebrow': { en: 'Projects & Research', vi: 'Dự án & Nghiên cứu' },
  'projects.title': { en: 'Selected projects & research.', vi: 'Dự án & công trình nghiên cứu.' },

  'timeline.eyebrow': { en: 'Timeline', vi: 'Dòng thời gian' },
  'timeline.title': { en: 'Key milestones.', vi: 'Những cột mốc chính.' },

  'beyond.eyebrow': { en: 'Beyond the Code', vi: 'Bên ngoài code' },
  'beyond.title': { en: 'Stories from the journey', vi: 'Những câu chuyện trong hành trình' },

  'certificates.eyebrow': { en: 'Achievements', vi: 'Thành tựu' },
  'certificates.title': { en: 'Awards, scholarships & certifications.', vi: 'Giải thưởng, học bổng & chứng nhận.' },
  'certificates.kind.award': { en: 'Award', vi: 'Giải thưởng' },
  'certificates.kind.scholarship': { en: 'Scholarship', vi: 'Học bổng' },
  'certificates.kind.certificate': { en: 'Certificate', vi: 'Chứng nhận' },
  'certificates.hint': { en: 'Drag to explore', vi: 'Kéo để xem thêm' },
  'certificates.view': { en: 'View', vi: 'Xem' },

  // Contact Section
  'contact.eyebrow': { en: 'Get in Touch', vi: 'Liên hệ' },
  'contact.title': { en: 'Let’s build something meaningful.', vi: 'Hãy cùng nhau xây dựng những giá trị ý nghĩa.' },
  'contact.desc': { 
    en: 'I’m open to AI software engineering opportunities, academic exchange, and research collaboration in NLP, Generative Information Retrieval, and Trustable AI.',
    vi: 'Tôi sẵn sàng với các cơ hội phát triển phần mềm AI, trao đổi học thuật và hợp tác nghiên cứu về NLP, truy hồi thông tin tạo sinh và AI đáng tin cậy.'
  },
  'contact.location': { en: 'Location', vi: 'Địa điểm' },
  'contact.email': { en: 'Email', vi: 'Email' },
  'contact.eduemail': { en: 'Education email', vi: 'Email trường' },

  // Project cards
  'project.livedemo': { en: 'Live Demo', vi: 'Xem chạy thử' },
  'project.readcase': { en: 'Read case study', vi: 'Xem chi tiết dự án' },
  'project.role': { en: 'Role', vi: 'Vai trò' },
  'project.contribution': { en: 'My contribution', vi: 'Đóng góp của tôi' },
  'project.stack': { en: 'Tech stack', vi: 'Công nghệ sử dụng' },
  'project.gallery': { en: 'Project gallery', vi: 'Hình ảnh dự án' },
  'project.resources': { en: 'Project links', vi: 'Liên kết dự án' },
  'project.close': { en: 'Close project', vi: 'Đóng dự án' },
  
  // Articles Modal / Cards
  'article.read': { en: 'Read Article', vi: 'Đọc Bài viết' },
  'article.close': { en: 'Close Article', vi: 'Đóng Bài viết' },
  'article.learned': { en: 'What I Learned', vi: 'Bài học kinh nghiệm' },
  'article.viewproof': { en: 'View Certificate →', vi: 'Xem Chứng nhận →' },
  'article.readtime': { en: '4 min read', vi: '4 phút đọc' },
  'article.tag': { en: 'Journey', vi: 'Hành trình' },

  // Top Jump Dot
  'spy.top': { en: 'Top', vi: 'Đầu trang' },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lang');
    return saved === 'vi' || saved === 'en' ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  const t = (key: string) => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

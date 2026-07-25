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
  'nav.projects': { en: 'Projects', vi: 'Dự án' },
  'nav.achievements': { en: 'Timeline', vi: 'Dòng thời gian' },
  'nav.beyond': { en: 'Beyond', vi: 'Bên lề' },
  'nav.certificates': { en: 'Awards', vi: 'Giải thưởng' },
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

  'projects.eyebrow': { en: 'Projects', vi: 'Dự án' },
  'projects.title': { en: 'Featured projects.', vi: 'Các dự án tiêu biểu.' },

  'timeline.eyebrow': { en: 'Timeline', vi: 'Dòng thời gian' },
  'timeline.title': { en: 'Milestones through the years.', vi: 'Những cột mốc qua từng năm.' },

  'beyond.eyebrow': { en: 'Beyond the Code', vi: 'Bên ngoài code' },
  'beyond.title': { en: 'Stories from the journey', vi: 'Những câu chuyện trong hành trình' },

  'certificates.eyebrow': { en: 'Recognition', vi: 'Ghi nhận' },
  'certificates.title': { en: 'Awards & certifications.', vi: 'Giải thưởng & chứng nhận.' },
  'certificates.hint': { en: 'Drag to explore · Auto-scrolling pauses while you interact', vi: 'Kéo để xem · Tự động dừng khi bạn tương tác' },
  'certificates.view': { en: 'View', vi: 'Xem' },

  // Contact Section
  'contact.eyebrow': { en: 'Get in Touch', vi: 'Liên hệ' },
  'contact.title': { en: 'Let’s build something meaningful.', vi: 'Hãy cùng nhau xây dựng những giá trị ý nghĩa.' },
  'contact.desc': { 
    en: 'I’m open to software development opportunities where I can contribute with care, learn from an experienced team, and grow through real product challenges.',
    vi: 'Tôi sẵn sàng với các cơ hội phát triển phần mềm, nơi tôi có thể đóng góp bằng sự chỉn chu, học hỏi từ một đội ngũ giàu kinh nghiệm và trưởng thành qua những bài toán sản phẩm thực tế.'
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

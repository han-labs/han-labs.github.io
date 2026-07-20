import { useLanguage } from '../context/LanguageContext';

const contributionsData = {
  en: [
    {
      title: 'Backend Development',
      text: 'Build REST APIs, authentication, RBAC, and database-backed features.',
    },
    {
      title: 'Database Design',
      text: 'Design PostgreSQL schemas for real application workflows.',
    },
    {
      title: 'Deployment Mindset',
      text: 'Containerize and deploy applications with Docker, Nginx, and AWS EC2.',
    },
    {
      title: 'Team Collaboration',
      text: 'Work with Git, Agile/Scrum, documentation, and clear project ownership.',
    },
  ],
  vi: [
    {
      title: 'Lập trình Backend',
      text: 'Xây dựng các API REST, xác thực, phân quyền (RBAC) và các tính năng kết nối cơ sở dữ liệu.',
    },
    {
      title: 'Thiết kế Cơ sở Dữ liệu',
      text: 'Thiết kế cấu trúc bảng PostgreSQL cho các quy trình nghiệp vụ thực tế của ứng dụng.',
    },
    {
      title: 'Tư duy Triển khai',
      text: 'Đóng gói container và triển khai ứng dụng với Docker, Nginx và AWS EC2.',
    },
    {
      title: 'Làm việc nhóm',
      text: 'Làm việc với Git, Agile/Scrum, chuẩn bị tài liệu kỹ thuật và tinh thần tự chủ công việc.',
    },
  ]
};

export function Contributions() {
  const { lang, t } = useLanguage();
  const list = contributionsData[lang];

  return (
    <section className="mx-auto max-w-5xl px-4 py-4 md:px-6 md:py-4.5">
      <SectionHeader eyebrow={t('contribute.eyebrow')} title={t('contribute.title')} />
      <div className="grid gap-4.5 md:grid-cols-2 lg:grid-cols-4 mt-3">
        {list.map((item) => (
          <article
            key={item.title}
            className="border-2 border-ink bg-paper p-3.5 md:p-4 flex flex-col justify-start"
          >
            <h3 className="text-xs md:text-sm font-black text-ink">{item.title}</h3>
            <p className="mt-1.5 text-[10px] md:text-[11px] font-semibold leading-relaxed text-ink/80">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

// Inline SectionHeader component to prevent import dependency issues if needed,
// but let's check and keep importing from SectionHeader since it is verified.
import { SectionHeader } from './SectionHeader';

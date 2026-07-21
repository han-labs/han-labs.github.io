import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from './SectionHeader';

const contributionsData = {
  en: [
    {
      title: 'Backend development',
      text: 'Build REST APIs, authentication, RBAC, and database-backed features.',
    },
    {
      title: 'Database design',
      text: 'Design PostgreSQL schemas for real application workflows.',
    },
    {
      title: 'Deployment mindset',
      text: 'Containerize and deploy applications with Docker, Nginx, and AWS EC2.',
    },
    {
      title: 'Team collaboration',
      text: 'Work with Git, Agile/Scrum, documentation, and clear project ownership.',
    },
  ],
  vi: [
    {
      title: 'Lập trình backend',
      text: 'Xây dựng các API REST, xác thực, phân quyền (RBAC) và các tính năng kết nối cơ sở dữ liệu.',
    },
    {
      title: 'Thiết kế cơ sở dữ liệu',
      text: 'Thiết kế cấu trúc bảng PostgreSQL cho các quy trình nghiệp vụ thực tế của ứng dụng.',
    },
    {
      title: 'Tư duy triển khai',
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
    <section className="mx-auto max-w-6xl px-4 py-5 md:px-6 md:py-6">
      <SectionHeader eyebrow={t('contribute.eyebrow')} title={t('contribute.title')} />
      <div className="mt-2 grid gap-x-12 md:grid-cols-2">
        {list.map((item) => (
          <article key={item.title} className="border-b border-ink/20 py-4 first:pt-1">
            <h3 className="text-base font-semibold text-ink">{item.title}</h3>
            <p className="mt-1.5 max-w-xl text-sm font-normal leading-relaxed text-ink/75">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

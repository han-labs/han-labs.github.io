import { profile } from '../data/profile';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { lang, t } = useLanguage();
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-5 md:px-6 md:py-6">
      <SectionHeader
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
      />
      <div className="brutal-card p-4 text-sm font-normal leading-7 text-ink/90 md:p-5 md:text-[15px]">
        <p>{profile[lang].about}</p>
      </div>
      <div className="brutal-card mt-4 bg-paper p-4 md:p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold text-ink">Software Engineer Intern · Eduz Company Limited</h3>
          <span className="text-xs text-ink/60">{lang === 'en' ? 'Aug 2026 – Present' : '08/2026 – Hiện tại'}</span>
        </div>
        <p className="mt-2 text-sm font-medium text-ink/85">
          {lang === 'en' ? 'AI-Integrated Career Simulation Platform' : 'Nền tảng mô phỏng nghề nghiệp tích hợp AI'}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink/80">
          {lang === 'en'
            ? 'Led a team in system design and developed and tested an end-to-end RAG knowledge base and tool-using LLM agent. Incorporated access control, prompt-injection checks, and output validation guardrails to improve AI reliability.'
            : 'Dẫn dắt nhóm trong thiết kế hệ thống; phát triển và kiểm thử knowledge base RAG và LLM agent sử dụng công cụ xuyên suốt. Tích hợp kiểm soát truy cập, kiểm tra prompt injection và xác thực đầu ra để nâng cao độ tin cậy của AI.'}
        </p>
        <p className="mt-3 text-xs leading-relaxed text-ink/60">Java · Spring Boot · React · PostgreSQL · pgvector · Docker Compose · Gemini Embedding API · LLM API</p>
      </div>
    </section>
  );
}

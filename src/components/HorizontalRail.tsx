import { ReactNode, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function HorizontalRail({ children, label }: { children: ReactNode; label: string }) {
  const { lang } = useLanguage();
  const rail = useRef<HTMLDivElement>(null);
  const gesture = useRef({ x: 0, scroll: 0, active: false, dragged: false });
  const move = (direction: number) => {
    const node = rail.current;
    if (node) node.scrollBy({ left: direction * (node.firstElementChild?.getBoundingClientRect().width ?? 300) + direction * 16, behavior: 'auto' });
  };

  return (
    <div className="min-w-0">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-[11px] text-ink/60">{lang === 'en' ? 'Swipe, drag or use the arrows to explore' : 'Vuốt, kéo hoặc dùng mũi tên để xem thêm'}</p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => move(-1)} aria-label={lang === 'en' ? 'Scroll left' : 'Cuộn sang trái'} className="brutal-button h-8 w-8 cursor-pointer bg-paper text-ink">←</button>
          <button type="button" onClick={() => move(1)} aria-label={lang === 'en' ? 'Scroll right' : 'Cuộn sang phải'} className="brutal-button h-8 w-8 cursor-pointer bg-paper text-ink">→</button>
        </div>
      </div>
      <div
        ref={rail}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="manual-rail flex gap-4 overflow-x-auto overflow-y-hidden pb-4 pt-1 focus-visible:outline-2 focus-visible:outline-blue-pop"
        onPointerDown={(event) => {
          if (event.pointerType !== 'mouse' || event.button !== 0) return;
          gesture.current = { x: event.clientX, scroll: event.currentTarget.scrollLeft, active: true, dragged: false };
        }}
        onPointerMove={(event) => {
          const state = gesture.current;
          if (!state.active) return;
          const delta = event.clientX - state.x;
          if (Math.abs(delta) > 8) {
            state.dragged = true;
            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.scrollLeft = state.scroll - delta;
          }
        }}
        onPointerUp={() => { gesture.current.active = false; }}
        onPointerCancel={() => { gesture.current.active = false; }}
        onLostPointerCapture={() => { gesture.current.active = false; }}
        onClickCapture={(event) => {
          if (gesture.current.dragged) {
            event.preventDefault();
            event.stopPropagation();
            gesture.current.dragged = false;
          }
        }}
        onDragStart={(event) => event.preventDefault()}
      >
        {children}
      </div>
    </div>
  );
}

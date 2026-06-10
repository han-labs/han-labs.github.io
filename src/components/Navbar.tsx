import { profile } from '../data/profile';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Blog', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-cream/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="text-xl font-black tracking-tight">
          H.G.HAN
        </a>
        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <a key={link.href} className="font-bold hover:underline" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a
          className="brutal-button bg-yellow-pop px-4 py-2 text-sm font-black"
          href={profile.cv}
          target="_blank"
          rel="noreferrer"
        >
          View Resume
        </a>
      </nav>
    </header>
  );
}

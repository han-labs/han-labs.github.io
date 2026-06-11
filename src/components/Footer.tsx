import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t-4 border-ink bg-paper px-4 py-6 text-sm font-bold md:px-6 text-ink transition-colors duration-300">
      <div className="mx-auto max-w-7xl grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
        
        {/* Profile Details */}
        <div className="space-y-0.5">
          <p className="font-black text-base">{profile.name}</p>
          <p className="text-xs text-ink/85">{profile.role}</p>
          <p className="text-xs text-ink/75">HCMUTE Information Technology Student</p>
        </div>

        {/* Location & Quick Links */}
        <div className="space-y-0.5">
          <p className="text-xs text-ink/80">{profile.location}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-black">
            <a href={`mailto:${profile.email}`} className="underline hover:text-pink-pop transition-colors">
              Email
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="underline hover:text-pink-pop transition-colors">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-pink-pop transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Stack Credits */}
        <div className="text-xs md:text-right lg:col-span-1 space-y-0.5">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p className="text-[10px] text-ink/75">
            Built with React, Vite, Tailwind CSS, and GitHub Pages
          </p>
        </div>

      </div>
    </footer>
  );
}

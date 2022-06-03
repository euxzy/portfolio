import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Works', path: '/works' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed left-0 -top-12 z-40 flex w-full justify-between pt-24 md:top-0">
      <div className="flex w-1/2 items-baseline">
        <div className="w-3/5 md:w-2/5">
          <div className="line-header mb-1 h-1 w-1/4" />
          <div className="line-header mb-1 h-1 w-full" />
          <div className="line-header h-1 w-2/3" />
        </div>
      </div>

      <div className="relative flex w-1/2 flex-col items-end justify-end md:flex-row">
        <div onClick={() => setOpen(!open)} className={`mr-12 flex w-8 cursor-pointer flex-col items-end md:hidden ${!open ? '' : 'hamburger-active'}`}>
          <div className="hamburger-line w-1/2" />
          <div className="hamburger-line w-full" />
          <div className="hamburger-line w-2/3" />
        </div>

        <div className={`absolute -mb-36 md:relative md:mb-0 md:mr-10 md:w-11/12 lg:mr-40 lg:w-1/2 ${!open ? 'hide' : 'show'}`}>
          <nav className="flex flex-col justify-evenly rounded-md bg-secondary-dark bg-opacity-75 p-5 font-medium backdrop-blur-md transition-all duration-300 md:mr-0 md:w-full md:flex-row md:rounded-none md:bg-transparent md:p-0 md:backdrop-blur-none">
            {navLinks.map((link) => (
              <Link key={link.title} href={link.path}>
                <a className={`transition-all duration-500 hover:text-primary-light ${router.pathname === link.path ? 'text-primary-light' : ''}`}>{link.title}</a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

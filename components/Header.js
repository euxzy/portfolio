import Link from 'next/link';

export default function Header() {
  return (
    <div className="fixed z-40 flex w-full justify-between pt-24">
      <div className="flex w-1/2 items-baseline">
        <div className="w-2/5">
          <div className="mb-1 h-1 w-1/4 bg-primary-light" />
          <div className="mb-1 h-1 w-full bg-primary-light" />
          <div className="h-1 w-2/3 bg-primary-light" />
        </div>
      </div>

      <div className="flex w-1/2 justify-end">
        <nav className="mr-40 flex w-1/2 justify-evenly font-semibold">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/works">
            <a>Works</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}

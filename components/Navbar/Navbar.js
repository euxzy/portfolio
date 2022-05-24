import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed z-40 w-full pt-28">
      <div className="flex w-1/2 items-baseline">
        <div className="w-1/3">
          <div className="mb-1 h-1 w-1/4 bg-primary-light" />
          <div className="mb-1 h-1 w-full bg-primary-light" />
          <div className="h-1 w-2/3 bg-primary-light" />
        </div>
        <div className="flex w-1/2 justify-evenly">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/works">Works</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

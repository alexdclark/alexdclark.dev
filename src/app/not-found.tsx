import Link from 'next/link';
import { Navbar } from '../components/navbar';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-gray-900 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
      <Navbar />
      <main className="section-container flex flex-col items-center justify-center text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mb-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
          The page you&apos;re looking for doesn&apos;t exist. Use the navigation to explore the portfolio or head back home.
        </p>
        <Link
          href="/"
          className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50"
        >
          Return home
        </Link>
      </main>
    </div>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';
import { siteContent } from '../content/site';

const title = `${siteContent.name} | ${siteContent.headline}`;
const description = siteContent.summary;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title,
    description,
    url: 'https://example.com',
    siteName: siteContent.name,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-b from-white via-slate-50 to-white text-gray-900 antialiased dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

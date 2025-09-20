import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'DAOpool - Pool crypto, trade smarter, share profits together',
  description: 'A Base MiniApp that enables users to pool their crypto assets, collectively make investment decisions, and automatically distribute profits.',
  openGraph: {
    title: 'DAOpool',
    description: 'Pool crypto, trade smarter, share profits together.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-text-primary">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

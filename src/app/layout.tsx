import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bean There Coffee | Artisan Roasts',
  description: 'Premium coffee shop serving artisanal roasts and fresh bites.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <nav className="p-6 flex justify-between items-center bg-stone-900 text-white">
          <h1 className="text-2xl font-bold">Bean There Coffee</h1>
          <div className="space-x-4">
            <a href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
        <main className="flex-grow">{children}</main>
        <footer className="p-6 text-center bg-stone-100">© 2023 Bean There Coffee</footer>
      </body>
    </html>
  );
}
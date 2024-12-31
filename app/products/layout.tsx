import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-blue-600 text-white">
          <nav>
            <Link href="/" className="mr-4">
              Home
            </Link>
            <Link href="/products">
              Products
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

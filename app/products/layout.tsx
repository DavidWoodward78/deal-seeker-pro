export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          <header className="p-4 bg-blue-600 text-white">
            <nav>
              <a href="/" className="mr-4">Home</a>
              <a href="/products">Products</a>
            </nav>
          </header>
          <main>{children}</main>
        </body>
      </html>
    );
  }
  
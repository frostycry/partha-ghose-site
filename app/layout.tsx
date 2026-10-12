import './globals.css'

export const metadata = {
  title: 'Partha Ghose | Science, Philosophy & Culture',
  description: 'Physicist • Philosopher of Science • Educator • Science Communicator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Applies the ivory and deep navy palette */}
      <body className="bg-[#FFFFF0] text-[#000080] font-serif min-h-screen">
        <header className="py-8 px-12 border-b border-[#D4AF37]">
          <h1 className="text-3xl font-bold tracking-wider mb-4">PARTHA GHOSE</h1>
          <nav className="flex space-x-6 text-sm font-sans tracking-wide">
            <a href="/" className="hover:text-[#D4AF37] transition">Home</a>
            <a href="/about" className="hover:text-[#D4AF37] transition">About</a>
            <a href="/research" className="hover:text-[#D4AF37] transition">Research</a>
            <a href="/publications" className="hover:text-[#D4AF37] transition">Publications</a>
            <a href="/arts" className="hover:text-[#D4AF37] transition">Arts</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
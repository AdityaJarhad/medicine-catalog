import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-16 bg-white border-b">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpeg"
            alt="Laurynix Therapeutics"
            width={120}
            height={32}
            priority
          />
        </Link>

        <div className="flex gap-6 text-sm font-medium text-slate-700">
          <Link
            href="/"
            className="px-3 py-2 rounded-md hover:text-[#2aab8e] hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2aab8e] focus-visible:ring-offset-2"
          >
            Home
          </Link>
          <Link
            href="/categories"
            className="px-3 py-2 rounded-md hover:text-[#2aab8e] hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2aab8e] focus-visible:ring-offset-2"
          >
            Categories
          </Link>
          <Link
            href="/medicines"
            className="px-3 py-2 rounded-md hover:text-[#2aab8e] hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2aab8e] focus-visible:ring-offset-2"
          >
            Medicines
          </Link>
        </div>
      </div>
    </nav>
  )
}
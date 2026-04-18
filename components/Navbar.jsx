'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/categories', label: 'Categories' },
    { href: '/medicines', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/careers', label: 'Careers' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="relative">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="Laurynix Therapeutics"
              width={150}
              height={50}
              style={{ width: 'auto', height: '40px' }}
              priority
            />
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#2aab8e]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="site-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#2aab8e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2aab8e] focus-visible:ring-offset-2 md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div
            id="site-navigation"
            className="absolute inset-x-0 top-full z-50 border-t border-slate-200 bg-white shadow-lg md:hidden"
          >
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-3 sm:px-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block border-b border-slate-100 px-5 py-4 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#2aab8e] last:border-b-0"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

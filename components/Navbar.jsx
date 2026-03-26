'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/categories', label: 'Categories' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/careers', label: 'Careers' },
  ]

  const isActive = (href) => pathname === href

  return (
    <>
      <nav className="sticky top-0 z-50 h-16 bg-white border-b border-slate-200 shadow-sm">
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

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} className="text-slate-700" />
          </button>
        </div>
      </nav>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      <div
        className={`fixed left-0 top-0 h-screen w-64 bg-white shadow-lg z-50 transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">Menu</h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={20} className="text-slate-700" />
          </button>
        </div>

        <nav className="p-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsDrawerOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors font-medium ${
                isActive(link.href)
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
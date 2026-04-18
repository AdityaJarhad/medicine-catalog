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
  ]

  return (
    <>
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
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

          <button
            onClick={() => setIsOpen(prev => !prev)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Dropdown menu */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '65px',
          right: '16px',
          background: 'white',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          zIndex: 49,
          minWidth: '160px'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ color: '#334155', fontWeight: 500, textDecoration: 'none', padding: '8px 12px', borderRadius: '6px', display: 'block' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
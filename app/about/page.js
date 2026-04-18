import Link from 'next/link'

const highlights = [
  {
    title: 'Our Mission',
    description:
      'We focus on making high-quality pharmaceutical products more accessible, dependable, and easy to discover for healthcare professionals and patients.',
  },
  {
    title: 'Quality First',
    description:
      'Our product approach emphasizes trusted formulations, responsible quality standards, and consistency across every category we offer.',
  },
  {
    title: 'Growing Reach',
    description:
      'From everyday healthcare needs to specialized product categories, we aim to support pharmacies, doctors, and medical distributors across India.',
  },
]

const contactLinks = [
  {
    label: 'Website',
    value: 'laurynixtherapeutics.com',
    href: 'https://laurynixtherapeutics.com',
  },
  {
    label: 'Products',
    value: 'Browse the medicine catalog',
    href: '/medicines',
  },
  {
    label: 'Careers',
    value: 'See hiring information',
    href: '/careers',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#eafaf6] to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-screen-2xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2aab8e]">
              About Laurynix Therapeutics
            </p>
            <h1 className="text-4xl font-bold text-slate-800 sm:text-5xl">
              Building a dependable pharmaceutical catalog for everyday healthcare needs.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Laurynix Therapeutics is focused on delivering trusted products, clear category access,
              and a smooth experience for discovering medicines across a growing catalog.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/medicines"
                className="rounded-md bg-[#2aab8e] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#238f76]"
              >
                Browse Products
              </Link>
              <Link
                href="/careers"
                className="rounded-md border border-[#2aab8e] px-6 py-3 text-sm font-semibold text-[#2aab8e] transition-colors hover:bg-[#eafaf6]"
              >
                View Careers
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-800">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-screen-2xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl bg-[#f8fffe] p-8">
            <h2 className="text-2xl font-bold text-slate-800">Company Overview</h2>
            <div className="mt-5 space-y-4 text-slate-600">
              <p>
                Our platform is designed to make medicine discovery simpler through category-first
                browsing, featured product visibility, and clear product information in one place.
              </p>
              <p>
                We believe healthcare product access should feel organized and reliable. That is
                why Laurynix Therapeutics combines strong presentation, category structure, and a
                quality-focused brand experience throughout the catalog.
              </p>
              <p>
                As the catalog continues to grow, our goal is to support efficient product
                exploration for doctors, pharmacies, distributors, and healthcare buyers.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800">Contact Details</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Use the official Laurynix Therapeutics channels below for company information,
              product browsing, and hiring updates.
            </p>
            <div className="mt-6 space-y-4">
              {contactLinks.map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {item.label}
                  </p>
                  {item.href.startsWith('http') ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block text-base font-semibold text-slate-800 transition-colors hover:text-[#2aab8e]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="mt-2 block text-base font-semibold text-slate-800 transition-colors hover:text-[#2aab8e]"
                    >
                      {item.value}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

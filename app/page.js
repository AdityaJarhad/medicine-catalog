import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default async function Home() {
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .limit(5)

  const { data: medicines } = await supabase
    .from('medicines')
    .select('*, categories(name)')
    .eq('in_stock', true)
    .limit(6)

  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#eafaf6] to-[#f0fdf9] py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="text-sm font-semibold text-[#2aab8e] uppercase tracking-widest">
              Trusted Pharmaceutical Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              Quality Medicines <br />
              <span className="text-[#2aab8e]">You Can Trust</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-md">
              Explore Laurynix Therapeutics&apos; complete medicine catalog — trusted by doctors and patients across India.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="/medicines"
                className="bg-[#2aab8e] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#238f76] transition-colors"
              >
                Browse Medicines
              </Link>
              <Link
                href="/categories"
                className="border border-[#2aab8e] text-[#2aab8e] px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#eafaf6] transition-colors"
              >
                View Categories
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            {[
              { number: '500+', label: 'Products' },
              { number: '25+', label: 'Categories' },
              { number: '10+', label: 'Years Experience' },
              { number: '100%', label: 'Quality Assured' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <p className="text-3xl font-bold text-[#2aab8e]">{stat.number}</p>
                <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-10">
            Why Choose Laurynix?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🏥', title: 'Certified Quality', desc: 'All medicines are WHO-GMP certified and quality tested.' },
              { icon: '🔬', title: 'Research Driven', desc: 'Backed by years of pharmaceutical research and innovation.' },
              { icon: '🚚', title: 'Wide Availability', desc: 'Available across pharmacies and medical stores pan India.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl border hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-8 bg-[#f8fffe]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-slate-800">Browse by Category</h2>
            <Link href="/categories" className="text-sm text-[#2aab8e] font-medium hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories?.map((cat, i) => {
              const icons = ['💊', '🩺', '🧬', '❤️', '🩹']
              return (
                <Link key={cat.id} href={`/medicines?category=${cat.slug}`}>
                  <div className="bg-white border rounded-xl p-5 text-center hover:shadow-md hover:border-[#2aab8e] transition-all cursor-pointer">
                    <div className="text-3xl mb-3">{icons[i] || '💊'}</div>
                    <p className="font-semibold text-slate-700 text-sm">{cat.name}</p>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{cat.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Medicines */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-slate-800">Featured Medicines</h2>
            <Link href="/medicines" className="text-sm text-[#2aab8e] font-medium hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicines?.map((med) => (
              <Link key={med.id} href={`/medicines/${med.id}`}>
                <div className="border rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold text-slate-800">{med.name}</p>
                      <p className="text-xs text-slate-400">{med.generic_name}</p>
                    </div>
                    <span className="text-xs bg-[#eafaf6] text-[#2aab8e] px-2 py-1 rounded-full font-medium">
                      {med.categories?.name}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 line-clamp-2">{med.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="font-bold text-slate-800">${med.price}</p>
                    {med.requires_prescription && (
                      <span className="text-xs border border-orange-400 text-orange-500 px-2 py-1 rounded-full">
                        Rx Required
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-[#2aab8e]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white space-y-3">
            <h2 className="text-3xl font-bold">About Laurynix Therapeutics</h2>
            <p className="text-white/80 max-w-lg">
              We are committed to delivering high-quality pharmaceutical products that improve lives.
              With a focus on innovation, safety, and accessibility.
            </p>
          </div>
          <Link
            href="/categories"
            className="bg-white text-[#2aab8e] px-8 py-3 rounded-md font-semibold hover:bg-slate-50 transition-colors whitespace-nowrap"
          >
            Explore Products
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-8 px-8 text-center text-sm">
        <p>© 2024 Laurynix Therapeutics. All rights reserved.</p>
        <p className="mt-1 text-slate-400">laurynixtherapeutics.com</p>
      </footer>

    </div>
  )
}
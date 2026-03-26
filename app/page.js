import { getSupabase } from '@/lib/supabase'
import Link from 'next/link'
import CategoryCard from '@/components/CategoryCard'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const supabase = getSupabase()

  if (!supabase) {
    return (
      <div className="p-10">
        <h1>Configuration missing</h1>
        <p>Set Supabase env variables in Vercel.</p>
      </div>
    )
  }

  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .limit(6)

  const { data: products } = await supabase
    .from('products')
    .select('*')
    .limit(6)

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 mb-12">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">
              Trusted Pharmaceutical Supply
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Trusted Pharmaceutical Supply <br />
              <span className="text-teal-600">Across India</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl">
              Quality medicines delivered to pharmacies and distributors nationwide. Laurynix Therapeutics — your trusted partner for comprehensive pharmaceutical solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/products"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Explore Products
              </Link>
              <Link
                href="#contact"
                className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: '500+', label: 'Products' },
              { number: '20+', label: 'Categories' },
              { number: 'Pan India', label: 'Supply' },
              { number: 'GMP', label: 'Certified' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <p className="text-2xl font-bold text-teal-600">{stat.number}</p>
                <p className="text-slate-600 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Why Choose Laurynix?
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            We deliver excellence through quality, reliability, and fast service
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Quality Assurance', desc: 'All products are GMP certified and stringently quality tested.' },
              { title: 'Reliability', desc: 'Consistent supply across pharmacies and distributors nationwide.' },
              { title: 'Fast Dispatch', desc: 'Quick processing and reliable logistics across pan India.' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-lg border border-slate-200 hover:shadow-lg hover:border-teal-300 transition-all">
                <h3 className="font-bold text-slate-900 mb-3 text-lg">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Featured Categories</h2>
            <Link href="/categories" className="text-teal-600 font-semibold hover:text-teal-700">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories?.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-8 px-8 text-center text-sm">
        <p>© 2024 Laurynix Therapeutics. All rights reserved.</p>
        <p className="mt-1 text-slate-400">Quality pharmaceutical solutions | Pan India Supply</p>
      </footer>
    </div>
  )
}
import { getSupabase } from '@/lib/supabase'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function CategoriesPage() {
  const supabase = getSupabase()

  if (!supabase) {
    return (
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-slate-800">Medicine Categories</h1>
        <p className="text-slate-500 mt-2">
          Configuration missing: set env variables in Vercel.
        </p>
      </div>
    )
  }

  const { data: categories, error } = await supabase
    .from('categories')
    .select('*, medicines(count)')

  if (error) {
    return (
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-slate-800">Medicine Categories</h1>
        <p className="text-slate-500 mt-2">Failed to load categories.</p>
      </div>
    )
  }

  const icons = ['💊', '🩺', '🧬', '❤️', '🩹']
  const colors = [
    'from-blue-50 to-blue-100 border-blue-200',
    'from-orange-50 to-orange-100 border-orange-200',
    'from-green-50 to-green-100 border-green-200',
    'from-red-50 to-red-100 border-red-200',
    'from-purple-50 to-purple-100 border-purple-200',
  ]
  const iconBg = [
    'bg-blue-100',
    'bg-orange-100',
    'bg-green-100',
    'bg-red-100',
    'bg-purple-100',
  ]

  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="mb-10">
        <p className="text-sm font-semibold text-[#2aab8e] uppercase tracking-widest mb-2">
          Our Range
        </p>
        <h1 className="text-3xl font-bold text-slate-800">Medicine Categories</h1>
        <p className="text-slate-500 mt-2">
          Browse our complete range of pharmaceutical products by category.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories?.map((cat, i) => (
          <Link key={cat.id} href={`/medicines?category=${cat.id}`}>
            <div className={`bg-gradient-to-br ${colors[i % colors.length]} border rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group`}>

              {/* Icon */}
              <div className={`${iconBg[i % iconBg.length]} w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5`}>
                {icons[i % icons.length]}
              </div>

              {/* Content */}
              <h2 className="text-lg font-bold text-slate-800 group-hover:text-[#2aab8e] transition-colors">
                {cat.name}
              </h2>
              <p className="text-sm text-slate-500 mt-1 mb-4">
                {cat.description}
              </p>

              {/* Footer row */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-medium text-slate-400">
                  {cat.medicines?.[0]?.count || 0} medicines
                </span>
                <span className="text-xs font-semibold text-[#2aab8e] group-hover:translate-x-1 transition-transform inline-block">
                  Browse →
                </span>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

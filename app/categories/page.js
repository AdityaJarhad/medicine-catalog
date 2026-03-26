import { getSupabase } from '@/lib/supabase'
import CategoryCard from '@/components/CategoryCard'

export const dynamic = 'force-dynamic'

export default async function CategoriesPage() {
  const supabase = getSupabase()

  if (!supabase) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-2xl font-bold text-slate-900">Product Categories</h1>
        <p className="text-slate-500 mt-2">Configuration missing: set env variables.</p>
      </div>
    )
  }

  const { data: categories } = await supabase
    .from('categories')
    .select('*')

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-12">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">
            Product Categories
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2">
            Browse Our Range
          </h1>
          <p className="text-slate-600 text-lg mt-4 max-w-2xl">
            Explore Laurynix Therapeutics' comprehensive range of pharmaceutical products organized by therapeutic category.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories?.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  )
}
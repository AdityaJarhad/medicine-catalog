import { getSupabase } from '@/lib/supabase'
import MedicineCard from '@/components/MedicineCard'

export const dynamic = 'force-dynamic'

export default async function MedicinesPage({ searchParams }) {
  const supabase = getSupabase()

  if (!supabase) {
    return (
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <p>Supabase not configured</p>
      </div>
    )
  }
  const params = await searchParams
  const categoryId = params?.category

  let query = supabase
    .from('medicines')
    .select('*, categories(name)')

  if (categoryId) {
    query = query.eq('categories.slug', categoryId)
  }

  const { data: medicines, error } = await query

  if (error) {
    return (
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <p>Failed to load medicines</p>
      </div>
    )
  }
  
  if (!medicines || medicines.length === 0) {
    return (
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <p>No medicines found</p>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6">Medicines</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicines?.map((med) => (
          <MedicineCard key={med.id} medicine={med} />
        ))}
      </div>
    </div>
  )
}

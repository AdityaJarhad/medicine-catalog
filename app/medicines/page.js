import { supabase } from '@/lib/supabase'
import MedicineCard from '@/components/MedicineCard'

export default async function MedicinesPage({ searchParams }) {
  const params = await searchParams
  const categoryId = params?.category

  let query = supabase
    .from('medicines')
    .select('*, categories(name)')

  if (categoryId) {
    query = query.eq('categories.slug', categoryId)
  }

  const { data: medicines } = await query

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Medicines</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicines?.map((med) => (
          <MedicineCard key={med.id} medicine={med} />
        ))}
      </div>
    </div>
  )
}
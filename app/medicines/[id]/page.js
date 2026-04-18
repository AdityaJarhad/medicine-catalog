import { getSupabase } from '@/lib/supabase'
import { Badge } from '@/components/ui/badge'

export const dynamic = 'force-dynamic'

export default async function MedicineDetailPage({ params }) {
  
  const { id } = await params
  const supabase = getSupabase()

  if (!supabase) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p>Supabase not configured</p>
      </div>
    )
  }

  const { data: medicine, error } = await supabase
    .from('medicines')
    .select('*, categories(name)')
    .eq('id', id)
    .maybeSingle()

  if (error) {
    console.log(error)
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p>Failed to load medicine.</p>
      </div>
    )
  }

  if (!medicine) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p>Medicine not found.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-800">{medicine.name}</h1>
      <p className="text-slate-500 mt-1">{medicine.generic_name}</p>

      <div className="flex gap-2 mt-3">
        <Badge>{medicine.categories?.name}</Badge>
        <Badge variant={medicine.in_stock ? 'default' : 'destructive'}>
          {medicine.in_stock ? 'In Stock' : 'Out of Stock'}
        </Badge>
        {medicine.requires_prescription && (
          <Badge variant="outline">Prescription Required</Badge>
        )}
      </div>

      <div className="mt-6 space-y-3 text-slate-700">
        <p><span className="font-semibold">Description:</span> {medicine.description}</p>
        <p><span className="font-semibold">Manufacturer:</span> {medicine.manufacturer}</p>
        <p><span className="font-semibold">Price:</span> ${medicine.price}</p>
      </div>
    </div>
  )
}

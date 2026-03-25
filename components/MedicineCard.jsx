import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function MedicineCard({ medicine }) {
  return (
    <Link href={`/medicines/${medicine.id}`}>
      <Card className="hover:shadow-md transition cursor-pointer h-full">
        <CardContent className="p-6 flex flex-col gap-2">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-semibold text-slate-800">
              {medicine.name}
            </h2>
            <Badge variant={medicine.in_stock ? 'default' : 'destructive'}>
              {medicine.in_stock ? 'In Stock' : 'Out of Stock'}
            </Badge>
          </div>
          <p className="text-sm text-slate-500">{medicine.generic_name}</p>
          <p className="text-sm text-slate-400">{medicine.categories?.name}</p>
          <p className="text-base font-bold text-slate-700 mt-auto">
            ${medicine.price}
          </p>
          {medicine.requires_prescription && (
            <Badge variant="outline" className="w-fit text-xs">
              Prescription Required
            </Badge>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function ProductCard({ product, onOpenModal }) {
  return (
    <Card
      onClick={() => onOpenModal(product)}
      className="hover:shadow-lg hover:border-teal-300 transition-all cursor-pointer h-full border border-slate-200"
    >
      <CardContent className="p-6 flex flex-col gap-4 h-full">
        <div className="flex-1">
          <div className="mb-3 h-40 bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="h-32 w-32 object-contain"
                />
              ) : (
                <div className="text-slate-400 text-sm">Product Image</div>
              )}
            </div>
          </div>

          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-slate-600 mb-3">{product.composition}</p>
        </div>

        <div className="space-y-3">
          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100">
            {product.category_name}
          </Badge>
          <p className="text-xs text-slate-500">{product.pack_sizes}</p>
        </div>
      </CardContent>
    </Card>
  )
}
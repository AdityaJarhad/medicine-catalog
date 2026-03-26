import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Pill, Heart, Droplet, Stethoscope, Zap, Wind } from 'lucide-react'

const iconMap = {
  pill: Pill,
  capsule: Pill,
  heart: Heart,
  droplet: Droplet,
  stethoscope: Stethoscope,
  baby: Pill,
  zap: Zap,
  wind: Wind,
}

export default function CategoryCard({ category }) {
  const IconComponent = iconMap[category.icon] || Pill

  return (
    <Link href={`/products?category=${category.id}`}>
      <Card className="hover:shadow-lg hover:border-teal-300 transition-all cursor-pointer border border-slate-200 h-full">
        <CardContent className="p-8 flex flex-col items-center justify-center text-center gap-4 h-full">
          <div className="p-4 bg-teal-50 rounded-lg">
            <IconComponent size={36} className="text-teal-600" />
          </div>
          <h2 className="text-xl font-semibold text-slate-900">
            {category.name}
          </h2>
          <p className="text-sm text-slate-600">
            {category.product_count} Products
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
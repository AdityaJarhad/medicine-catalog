import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export default function CategoryCard({ category }) {
  return (
    <Link href={`/medicines?category=${category.id}`}>
      <Card className="hover:shadow-md transition cursor-pointer">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-slate-800">
            {category.name}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {category.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
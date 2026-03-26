'use client'

import { useState, useEffect } from 'react'
import { getSupabase } from '@/lib/supabase'
import ProductCard from '@/components/MedicineCard'
import ProductModal from '@/components/ProductModal'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, X } from 'lucide-react'

export default function ProductsPage({ searchParams }) {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const supabase = getSupabase()
      if (!supabase) return

      const { data: cats } = await supabase
        .from('categories')
        .select('*')
      setCategories(cats || [])

      const { data: prods } = await supabase
        .from('products')
        .select('p:*, c:category_id(name)')
      setProducts(prods || [])
      setLoading(false)
    }

    fetchData()
  }, [])

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.composition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || product.category_id === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleOpenModal = (product) => {
    const category = categories.find(c => c.id === product.category_id)
    setSelectedProduct({
      ...product,
      category_name: category?.name || 'Unknown'
    })
    setIsModalOpen(true)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-slate-600">Loading products...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-12">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">
            Product Catalog
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2">
            All Products
          </h1>
          <p className="text-slate-600 text-lg mt-4">
            Browse our complete range of pharmaceutical products
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-slate-400" size={20} />
              <Input
                type="text"
                placeholder="Search by product name or composition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-slate-300"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {categories.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setSelectedCategory(null)}
                  variant={selectedCategory === null ? 'default' : 'outline'}
                  className={selectedCategory === null ? 'bg-teal-600 hover:bg-teal-700' : ''}
                >
                  All Categories
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    variant={selectedCategory === cat.id ? 'default' : 'outline'}
                    className={selectedCategory === cat.id ? 'bg-teal-600 hover:bg-teal-700' : ''}
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No products found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const category = categories.find(c => c.id === product.category_id)
                return (
                  <ProductCard
                    key={product.id}
                    product={{ ...product, category_name: category?.name || 'Unknown' }}
                    onOpenModal={handleOpenModal}
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
'use client'

import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { X, MessageCircle, Mail } from 'lucide-react'

export default function ProductModal({ isOpen, product, onClose }) {
  if (!product) return null

  const handleWhatsAppEnquiry = () => {
    const message = `Hi, I'm interested in ${product.name} - ${product.composition}. Please provide pricing and availability details.`
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailEnquiry = () => {
    const subject = `Product Enquiry: ${product.name}`
    const body = `Hi,\n\nI'm interested in the following product:\n\nProduct: ${product.name}\nComposition: ${product.composition}\nPack Sizes: ${product.pack_sizes}\n\nPlease provide pricing and availability details.\n\nThank you`
    const mailtoUrl = `mailto:enquiry@laurynixtherapeutics.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div>
            <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg flex items-center justify-center mb-4">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="h-56 w-56 object-contain"
                />
              ) : (
                <div className="text-slate-400 text-center">
                  <div>Product Image</div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                {product.name}
              </h1>
              <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100 mb-4">
                {product.category_name}
              </Badge>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                  Composition
                </h3>
                <p className="text-slate-900">{product.composition}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                  Pack Sizes
                </h3>
                <p className="text-slate-900">{product.pack_sizes}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                  Pricing
                </h3>
                <p className="text-slate-900">{product.price_label}</p>
              </div>

              {product.description && (
                <div>
                  <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                    Description
                  </h3>
                  <p className="text-slate-700">{product.description}</p>
                </div>
              )}
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200">
              <Button
                onClick={handleWhatsAppEnquiry}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Enquire via WhatsApp
              </Button>
              <Button
                onClick={handleEmailEnquiry}
                variant="outline"
                className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Enquire via Email
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

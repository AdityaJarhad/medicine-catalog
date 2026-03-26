import { Card, CardContent } from '@/components/ui/card'
import { Award, MapPin, Phone, Mail } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-16">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">
            About Us
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">
            Laurynix Therapeutics
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            Laurynix Therapeutics is a leading pharmaceutical company dedicated to delivering high-quality medicines to pharmacies, distributors, and healthcare facilities across India. With a commitment to excellence, innovation, and patient safety, we have established ourselves as a trusted partner in the pharmaceutical industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border border-slate-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To provide safe, effective, and affordable pharmaceutical products that improve the quality of life for millions across India. We are committed to innovation, quality assurance, and ethical business practices.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted pharmaceutical supplier in India, known for our unwavering commitment to quality, reliability, and customer satisfaction. We aspire to be a catalyst for positive change in healthcare.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Certifications & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Award, label: 'GMP Certified', desc: 'Good Manufacturing Practice certified facilities' },
              { icon: Award, label: 'ISO 9001:2015', desc: 'Quality Management System certified' },
              { icon: Award, label: 'WHO Approved', desc: 'WHO-GMP approved products and processes' },
            ].map((cert, i) => {
              const Icon = cert.icon
              return (
                <Card key={i} className="border border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <Icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">{cert.label}</h3>
                    <p className="text-slate-600 text-sm">{cert.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-slate-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Address</h3>
                      <p className="text-slate-600">
                        Laurynix Therapeutics Pvt. Ltd.<br />
                        Plot No. 123, Industrial Area<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
                      <p className="text-slate-600">
                        +91 98765 43210<br />
                        +91 22 1234 5678
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                      <p className="text-slate-600">
                        info@laurynixtherapeutics.com<br />
                        enquiry@laurynixtherapeutics.com
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-200">
              <CardContent className="p-8">
                <h3 className="font-bold text-slate-900 mb-4">Map Location</h3>
                <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-500 text-sm">Google Maps integration</p>
                    <p className="text-slate-400 text-xs mt-2">Mumbai, Maharashtra</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

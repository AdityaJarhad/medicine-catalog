import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Briefcase, Clock, Mail } from 'lucide-react'

export default function CareersPage() {
  const jobs = [
    {
      title: 'Senior Pharmaceutical Sales Executive',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      description: 'We are looking for experienced sales professionals to expand our market presence across India.'
    },
    {
      title: 'Quality Assurance Manager',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      description: 'Lead our quality assurance team and ensure all products meet GMP and regulatory standards.'
    },
    {
      title: 'Supply Chain Coordinator',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      description: 'Manage logistics and distribution operations to ensure timely delivery across India.'
    },
    {
      title: 'Regulatory Affairs Specialist',
      location: 'Delhi, NCR',
      type: 'Full-time',
      description: 'Ensure compliance with all pharmaceutical regulations and manage regulatory submissions.'
    },
    {
      title: 'Business Development Manager',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      description: 'Identify and develop new business opportunities with pharmaceutical distributors.'
    },
    {
      title: 'Internship - Pharmaceutical Operations',
      location: 'Mumbai, Maharashtra',
      type: 'Part-time',
      description: 'Gain hands-on experience in pharmaceutical operations and manufacturing processes.'
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-16">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">
            Join Our Team
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">
            Careers at Laurynix Therapeutics
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            We are a growing pharmaceutical company seeking talented professionals to join our dynamic team. If you are passionate about healthcare, innovation, and excellence, we would love to hear from you.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <Card key={i} className="border border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{job.title}</h3>
                      <p className="text-slate-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-teal-600" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-teal-600" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        window.location.href = `mailto:careers@laurynixtherapeutics.com?subject=Application for ${job.title}`
                      }}
                      className="bg-teal-600 hover:bg-teal-700 text-white whitespace-nowrap"
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="border border-slate-200 bg-slate-50">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">No Current Openings?</h3>
                  <p className="text-slate-600 mb-4">
                    We are always interested in meeting talented professionals. Send us your CV and we will keep it on file for future opportunities.
                  </p>
                  <Button
                    onClick={() => {
                      window.location.href = 'mailto:careers@laurynixtherapeutics.com?subject=CV Submission'
                    }}
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50"
                  >
                    Send Your CV
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

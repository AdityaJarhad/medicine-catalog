import Link from 'next/link'

const teams = [
  {
    title: 'Sales and Marketing',
    description:
      'Help expand product reach, strengthen customer relationships, and communicate the value of our pharmaceutical portfolio.',
  },
  {
    title: 'Quality and Regulatory',
    description:
      'Support documentation, compliance thinking, and quality-focused processes across the catalog and product lifecycle.',
  },
  {
    title: 'Operations and Supply',
    description:
      'Contribute to inventory visibility, coordination, and the systems that keep product delivery dependable.',
  },
  {
    title: 'Digital and Support',
    description:
      'Improve product data, catalog management, customer support, and the overall experience of the platform.',
  },
]

const steps = [
  'Explore the roles and team areas that match your background.',
  'Prepare a current resume with your relevant pharmaceutical or operations experience.',
  'Share your profile through the official Laurynix Therapeutics hiring channel.',
]

export default function CareersPage() {
  return (
    <div className="bg-[#f8fffe]">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2aab8e]">
            Careers
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-800 sm:text-5xl">
            Grow with a team focused on quality, access, and healthcare impact.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Laurynix Therapeutics is building a stronger product experience for modern
            pharmaceutical discovery. We are interested in people who care about reliable systems,
            thoughtful execution, and meaningful work in healthcare.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://laurynixtherapeutics.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-[#2aab8e] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#238f76]"
            >
              Visit Company Website
            </a>
            <Link
              href="/about"
              className="rounded-md border border-[#2aab8e] px-6 py-3 text-sm font-semibold text-[#2aab8e] transition-colors hover:bg-[#eafaf6]"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Where You Can Contribute</h2>
            <p className="mt-2 text-slate-600">
              These are the kinds of functional areas we expect to grow as the catalog and company
              continue to expand.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teams.map((team) => (
              <div key={team.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">{team.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-screen-2xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-[#2aab8e] p-8 text-white">
            <h2 className="text-2xl font-bold">Why Join Laurynix</h2>
            <p className="mt-4 text-sm leading-7 text-white/85">
              We value clarity, reliability, and practical improvement. Whether your strength is
              product knowledge, operations, sales, or digital support, there is room to help shape
              how the catalog grows and serves customers better.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800">Application Flow</h2>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2aab8e] text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-6 text-slate-600">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-500">
              If you want, we can also connect this page to a dedicated application form or an HR
              email once you share the official hiring contact details.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

const stats = [
  {
    value: '2.5+',
    label: 'Years building',
    description: 'production AI & backend systems, end-to-end',
  },
  {
    value: '80%',
    label: 'Operational turnaround reduced',
    description: 'by replacing manual workflows with automation',
  },
  {
    value: '$0',
    label: 'Per-query AI cost',
    description: 'via self-hosted LLM infrastructure, at scale',
  },
]

const WhatIDo = () => {
  return (
    <section className="what-i-do bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[140px_1fr] lg:gap-16">
          <div className="flex items-start gap-2 pt-2">
            <span className="what-i-do-star text-lg leading-none" aria-hidden>
              ✦
            </span>
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-900 uppercase">
              What I do
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl leading-[1.15] font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              I turn fragile, manual workflows into systems that just{' '}
              <span className="what-i-do-script text-[#2f6bff]">run</span> — APIs that
              scale, AI agents that think, and infrastructure that doesn&apos;t wake
              anyone up at 2am.
            </h2>

            <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-5xl font-bold text-[#2f6bff] sm:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-lg font-bold text-slate-900">{stat.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIDo

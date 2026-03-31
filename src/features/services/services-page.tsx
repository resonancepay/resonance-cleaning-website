import { ButtonLink } from "@/common/components/button";

const services = [
  {
    name: "Residential Detailing",
    summary: "Layered room care for homes that need visual calm and consistent upkeep.",
  },
  {
    name: "Commercial Maintenance",
    summary: "Quiet, reliable routines for front-of-house spaces, offices, and client environments.",
  },
  {
    name: "Post-Construction Recovery",
    summary: "Dust, residue, and debris removal staged in a methodical, finish-safe sequence.",
  },
  {
    name: "Recurring Service Plans",
    summary: "Weekly and custom cadences designed around occupancy, turnover, and event schedules.",
  },
];

export function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-2 sm:px-8 lg:grid-cols-[1fr_0.82fr] lg:px-10 lg:py-4">
          <div className="editorial-float relative overflow-hidden rounded-4xl px-7 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
            <div className="accent-orb" aria-hidden="true" />
            <p className="label-text mb-5 text-accent-lime">Services</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.02em] text-on-primary sm:text-6xl">
              Service architecture built for homes, teams, and high-traffic spaces.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 tracking-[0.01em] text-white/76">
              Every service line is tuned to context. We consider circulation, finishes, usage density,
              and timing before we write the cleaning plan.
            </p>
          </div>

          <div className="surface-soft rounded-4xl p-7 sm:p-10">
            <p className="label-text text-secondary-dark-green">Included by default</p>
            <div className="mt-6 space-y-8">
              <p className="text-xl leading-8 tracking-[0.01em] text-on-surface-variant">
                Room-by-room checklists, approved-product matching, discreet logistics, and final visual
                reset before handoff.
              </p>
              <ButtonLink href="/get-a-quote" variant="tertiary">
                Get a quote
              </ButtonLink>
            </div>
          </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
          <div className="surface-group rounded-4xl p-4 sm:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <article
                  key={service.name}
                  className={`rounded-3xl p-7 ${
                    index % 2 === 0 ? "surface-panel" : "surface-soft"
                  }`}
                >
                  <p className="label-text text-secondary-dark-green">Service 0{index + 1}</p>
                  <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.02em] text-primary">
                    {service.name}
                  </h2>
                  <p className="mt-4 text-base leading-8 tracking-[0.01em] text-on-surface-variant">
                    {service.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
      </section>
    </main>
  );
}

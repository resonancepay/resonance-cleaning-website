const contactChannels = [
  {
    label: "Email",
    value: "hello@resonancecleaning.com",
    description: "Best for briefs, access notes, and ongoing service coordination.",
  },
  {
    label: "Phone",
    value: "+234 800 000 0000",
    description: "For urgent scheduling updates and inspection requests.",
  },
  {
    label: "Hours",
    value: "Mon - Sat / 7am - 8pm",
    description: "After-hours coordination remains available for active clients.",
  },
];

export function ContactPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-2 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-4">
          <div className="editorial-float relative overflow-hidden rounded-[2rem] px-7 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
            <div className="accent-orb" aria-hidden="true" />
            <p className="label-text mb-5 text-[var(--accent-lime)]">Contact</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.02em] text-[var(--on-primary)] sm:text-6xl">
              Reach the team behind the calm.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 tracking-[0.01em] text-white/76">
              Use this page for direct conversations, site reviews, or handoff planning for new spaces
              entering the schedule.
            </p>
          </div>

          <div className="surface-group rounded-[2rem] p-4 sm:p-6">
            <div className="grid gap-4">
              {contactChannels.map((channel, index) => (
                <article
                  key={channel.label}
                  className={`rounded-[1.5rem] p-7 ${
                    index % 2 === 0 ? "surface-panel" : "surface-soft"
                  }`}
                >
                  <p className="label-text text-[var(--secondary-dark-green)]">{channel.label}</p>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-[var(--primary)]">
                    {channel.value}
                  </h2>
                  <p className="mt-4 text-base leading-8 tracking-[0.01em] text-[var(--on-surface-variant)]">
                    {channel.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
      </section>
    </main>
  );
}

import { Button } from "@/common/components/button";

export function GetAQuotePage() {
  return (
    <main className="flex-1">
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-2 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-4">
          <div className="surface-soft rounded-[2rem] p-7 sm:p-10">
            <p className="label-text text-[var(--secondary-dark-green)]">Get a quote</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.96] tracking-[-0.02em] text-[var(--primary)] sm:text-6xl">
              Share the brief. We will shape the cleaning rhythm around it.
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 tracking-[0.01em] text-[var(--on-surface-variant)]">
              Quote requests are structured around occupancy, finish expectations, access windows, and
              material sensitivity. The aim is not a generic estimate, but a usable service plan.
            </p>
          </div>

          <form className="editorial-float rounded-[2rem] px-7 py-8 text-[var(--on-primary)] sm:px-10 sm:py-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="label-text text-white/70">Name</span>
                <input className="field-input field-input-on-dark" type="text" placeholder="Aisha Sule" />
              </label>
              <label className="grid gap-2">
                <span className="label-text text-white/70">Email</span>
                <input
                  className="field-input field-input-on-dark"
                  type="email"
                  placeholder="hello@resonancecleaning.com"
                />
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="label-text text-white/70">Space type</span>
                <input
                  className="field-input field-input-on-dark"
                  type="text"
                  placeholder="Private residence, studio, office floor"
                />
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="label-text text-white/70">Preferred cadence</span>
                <input
                  className="field-input field-input-on-dark"
                  type="text"
                  placeholder="One-time reset, weekly, post-construction, pre-event"
                />
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="label-text text-white/70">Project brief</span>
                <textarea
                  className="field-input field-input-on-dark min-h-40 resize-y"
                  placeholder="Tell us about scale, scheduling constraints, materials, and desired finish level."
                />
              </label>
              <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-6 tracking-[0.01em] text-white/70">
                  We use tonal structure instead of noisy interfaces. The form stays focused on the
                  information needed to price accurately.
                </p>
                <Button type="submit" variant="tertiary">
                  Request quote
                </Button>
              </div>
            </div>
          </form>
      </section>
    </main>
  );
}

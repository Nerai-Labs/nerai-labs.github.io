export const metadata = {
  title: "How We Ship Software - Open PRO",
  description: "Three steps we follow on every project, from the first call to the release, with the screens our clients see at each one.",
  alternates: {
    languages: {
      en: "https://nerai-labs.github.io/workflows/",
      es: "https://nerai-labs.github.io/es/workflows/",
    },
  },
};

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center">
            <h1 className="font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
              How we ship software
            </h1>
            <p className="mt-4 text-lg text-indigo-200/65">
              Every project follows the same three steps, so you always know what comes next and when you will see it
              working.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            <article>
              <img src="/images/workflow-01.png" width="350" height="288" />
              <h2 className="mt-4 font-nacelle text-xl font-semibold text-gray-200">Plan the release</h2>
              <p className="mt-2 text-indigo-200/65">
                We start with a one hour call to agree on the problem, the people who will use the product and the date
                it has to be live. You get a written scope the same week.
              </p>
            </article>
            <article>
              <img src="/images/workflow-02.png" width="350" height="288" />
              <h2 className="mt-4 font-nacelle text-xl font-semibold text-gray-200">Build in short cycles</h2>
              <p className="mt-2 text-indigo-200/65">
                Work lands every two weeks on a preview link you can click. Each cycle ends with a demo and a short list
                of what changed, so feedback arrives while it is still cheap to act on.
              </p>
            </article>
            <article>
              <img src="/images/workflow-03.png" width="350" height="288" />
              <h2 className="mt-4 font-nacelle text-xl font-semibold text-gray-200">Release and measure</h2>
              <p className="mt-2 text-indigo-200/65">
                We ship behind a flag, watch errors and usage for the first days, and hand over a dashboard with the
                numbers that tell you whether the release did its job.
              </p>
            </article>
          </div>
          <div className="pt-16">
            <h2 className="font-nacelle text-2xl font-semibold text-gray-200">The people you will work with</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <figure>
                <img src="/images/testimonial-01.jpg" alt="MaKayla P., product lead" width="36" height="36" className="rounded-full" />
                <figcaption className="mt-2 text-indigo-200/65">
                  MaKayla P., product lead. She runs the planning call and writes your scope.
                </figcaption>
              </figure>
              <figure>
                <img src="/images/testimonial-02.jpg" alt="Andrew K., engineering lead" width="36" height="36" className="rounded-full" />
                <figcaption className="mt-2 text-indigo-200/65">
                  Andrew K., engineering lead. He ships each cycle to your preview link.
                </figcaption>
              </figure>
              <figure>
                <img src="/images/testimonial-03.jpg" alt="Lucy D., data analyst" width="36" height="36" className="rounded-full" />
                <figcaption className="mt-2 text-indigo-200/65">
                  Lucy D., data analyst. She builds the dashboard you get after the release.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

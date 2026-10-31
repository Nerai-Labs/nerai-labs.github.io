export const metadata = {
  title: "Open PRO: AI tools for product teams",
  description: "Conocé las carreras de grado y posgrados del ITBA, especializado en Tecnología, Ingeniería y Gestión, con más de 11.000 graduados.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">Who it is for</h2>
              <p className="text-lg text-indigo-200/65">Teams that publish weekly.</p>
              <ul>
                <li><strong>Founders:</strong> move faster.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">Questions</h2>
              <h3>Does it work?</h3>
              <p className="text-lg text-indigo-200/65">Yes, it&apos;s <a href="/signin/">ready</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@type": "Organization",
        "name": "Open PRO"
      }) }} />
    </>
  );
}

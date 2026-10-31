export const metadata = {
  title: "Home - Open PRO",
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
      <Cta />
    </>
  );
}

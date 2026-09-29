import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import CoursesSection from "@/components/CoursesSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeatureSection from "@/components/FeatureSection";
import CtaSection from "@/components/CtaSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative bg-white">
      <Header />
      <Hero />
      <Partners />
      <CoursesSection />
      <CategoriesSection />
      <FeatureSection />
      <CtaSection />
      <Testimonials />
      <Footer />
    </main>
  );
}

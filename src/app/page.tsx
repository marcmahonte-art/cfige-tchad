import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { AboutSection } from "@/components/home/AboutSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { ManagementServices } from "@/components/home/ManagementServices";
import { FormationSection } from "@/components/home/FormationSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyCfige } from "@/components/home/WhyCfige";
import { MethodSection } from "@/components/home/MethodSection";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogSection } from "@/components/home/BlogSection";
import { EnterpriseCTA } from "@/components/home/EnterpriseCTA";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ExpertiseSection />
      <ManagementServices />
      <FormationSection />
      <ServicesSection />
      <WhyCfige />
      <MethodSection />
      <Testimonials />
      <BlogSection />
      <EnterpriseCTA />
      <ContactSection />
    </>
  );
}

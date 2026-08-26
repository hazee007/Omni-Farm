import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import HydroponicsSection from "@/components/sections/HydroponicsSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import TechnologySection from "@/components/sections/TechnologySection";
import StatsSection from "@/components/sections/StatsSection";
import SustainabilitySection from "@/components/sections/SustainabilitySection";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { buildMetadata } from "@/utils/site";

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description:
    "OmniFarmhouse is a modern agritech company using hydroponic technology to grow cleaner, healthier, and sustainable produce.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <HydroponicsSection />
      <AboutSection />
      <ProductsSection />
      <TechnologySection />
      <StatsSection />
      <SustainabilitySection />
      <GallerySection />
      <CTASection />
      <ContactSection />
    </>
  );
}

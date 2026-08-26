import GalleryLightbox from "@/components/ui/GalleryLightbox";
import gallery from "@/data/gallery.json";
import Section from "@/components/ui/Section";

interface GallerySectionProps {
  title?: string;
  subtitle?: string;
}

export default function GallerySection({
  title = "Gallery",
  subtitle = "Take a look inside our hydroponic operations.",
}: GallerySectionProps) {
  return (
    <Section id="gallery" title={title} subtitle={subtitle}>
      <GalleryLightbox items={gallery} />
    </Section>
  );
}

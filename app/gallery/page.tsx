import type { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/utils/site";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "See OmniFarmhouse hydroponic operations across seedling, growth, and harvest stages.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <Box sx={{ py: 8, bgcolor: "#f1f5f9" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Gallery
          </Typography>
          <Typography sx={{ mt: 1.2, maxWidth: 760 }} color="text.secondary">
            A visual look into our technology-first hydroponic ecosystem.
          </Typography>
        </Container>
      </Box>
      <GallerySection
        title="Farm Gallery"
        subtitle="Click any image to view in lightbox mode."
      />
      <CTASection />
    </>
  );
}

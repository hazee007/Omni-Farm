import type { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";
import TechnologySection from "@/components/sections/TechnologySection";
import HydroponicsSection from "@/components/sections/HydroponicsSection";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/utils/site";

export const metadata: Metadata = buildMetadata({
  title: "Technology",
  description:
    "Discover OmniFarmhouse smart farming stack: NFT hydroponics, sensor monitoring, water recycling, and automation.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <Box sx={{ py: 8, bgcolor: "#111827", color: "white" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Smart Farming Technology
          </Typography>
          <Typography
            sx={{ mt: 1.2, maxWidth: 760, color: "rgba(255,255,255,0.82)" }}
          >
            Our systems combine hydroponic science, environmental control, and
            data intelligence.
          </Typography>
        </Container>
      </Box>
      <TechnologySection />
      <HydroponicsSection />
      <CTASection />
    </>
  );
}

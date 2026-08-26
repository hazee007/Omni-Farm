import type { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/utils/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn how OmniFarmhouse uses hydroponics, sustainability, and data-driven operations to transform agriculture.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Box sx={{ py: 8, bgcolor: "#e8f5e9" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            About OmniFarmhouse
          </Typography>
          <Typography sx={{ mt: 1.2, maxWidth: 760 }} color="text.secondary">
            We are building a premium, technology-first food production model
            for Africa through controlled-environment hydroponics.
          </Typography>
        </Container>
      </Box>
      <AboutSection />
      <StatsSection />
      <CTASection />
    </>
  );
}

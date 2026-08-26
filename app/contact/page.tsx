import type { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";
import ContactSection from "@/components/sections/ContactSection";
import { buildMetadata } from "@/utils/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact OmniFarmhouse for fresh hydroponic produce, partnerships, and enterprise inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Box sx={{ py: 8, bgcolor: "#e8f5e9" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Contact OmniFarmhouse
          </Typography>
          <Typography sx={{ mt: 1.2, maxWidth: 760 }} color="text.secondary">
            Reach us for orders, partnerships, and sustainability-focused
            collaborations.
          </Typography>
        </Container>
      </Box>
      <ContactSection />
    </>
  );
}

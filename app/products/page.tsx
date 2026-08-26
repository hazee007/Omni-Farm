import type { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";
import ProductsSection from "@/components/sections/ProductsSection";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/utils/site";

export const metadata: Metadata = buildMetadata({
  title: "Products",
  description:
    "Explore OmniFarmhouse hydroponic produce including fresh lettuce and upcoming tomato and habanero varieties.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <Box sx={{ py: 8, bgcolor: "#f0fdf4" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Products
          </Typography>
          <Typography sx={{ mt: 1.2, maxWidth: 760 }} color="text.secondary">
            Fresh hydroponic produce grown in controlled environments for
            consistency and quality.
          </Typography>
        </Container>
      </Box>
      <ProductsSection
        title="Current and Upcoming Produce"
        subtitle="Cards are data-driven and ready for future product additions."
      />
      <CTASection />
    </>
  );
}

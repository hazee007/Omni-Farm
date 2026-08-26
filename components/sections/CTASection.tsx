import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import Section from "@/components/ui/Section";

export default function CTASection() {
  return (
    <Section>
      <Box
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          bgcolor: "primary.main",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 2 }}
        >
          Ready to Experience Fresh Hydroponic Produce?
        </Typography>
        <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexDirection: { xs: "column", sm: "row" } }}>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            href="/contact"
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            component={Link}
            href="/contact"
          >
            Order Now
          </Button>
        </Box>
      </Box>
    </Section>
  );
}

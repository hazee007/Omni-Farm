import Image from "next/image";
import Link from "next/link";
import { Box, Button, Grid, Typography } from "@mui/material";
import Section from "@/components/ui/Section";
import AnimatedInView from "@/components/ui/AnimatedInView";
import company from "@/data/company.json";

export default function AboutSection() {
  return (
    <Section id="about">
      <Grid container spacing={4} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AnimatedInView>
            <Box
              sx={{
                position: "relative",
                minHeight: { xs: 280, md: 420 },
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/about-greenhouse.svg"
                alt="Modern hydroponic greenhouse"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </AnimatedInView>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AnimatedInView delay={0.08}>
            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" }, mb: 2 }}
            >
              Technology Meets Agriculture
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              OmniFarmhouse combines hydroponic farming with modern technology
              to produce high-quality vegetables in a more sustainable way.
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              {company.mission}
            </Typography>
            <Button variant="contained" component={Link} href="/about">
              Learn More
            </Button>
          </AnimatedInView>
        </Grid>
      </Grid>
    </Section>
  );
}

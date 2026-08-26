import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Section from "@/components/ui/Section";
import AnimatedInView from "@/components/ui/AnimatedInView";
import company from "@/data/company.json";

const highlights = [
  "Soil-Free",
  "Water Efficient",
  "Fresh Harvest",
  "Locally Grown",
];

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 560, md: 700 },
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Image
        src="/images/hero-greenhouse.svg"
        alt="Hydroponic greenhouse interior"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(95deg, rgba(11,18,32,0.88), rgba(11,18,32,0.55))",
        }}
      />
      <Section>
        <Grid
          container
          spacing={4}
          sx={{ position: "relative", alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <AnimatedInView>
              <Typography
                component="h1"
                variant="h1"
                sx={{ fontSize: { xs: "2.1rem", md: "3.4rem" }, mb: 2 }}
              >
                {company.tagline}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  color: "rgba(255,255,255,0.9)",
                  mb: 3,
                }}
              >
                Growing cleaner, healthier and more sustainable food through
                modern hydroponic farming.
              </Typography>
              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  href="/products"
                >
                  Explore Products
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  component={Link}
                  href="/technology"
                >
                  Our Technology
                </Button>
              </Box>
            </AnimatedInView>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <AnimatedInView delay={0.12}>
              <Card
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.24)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <CardContent>
                  <List dense>
                    {highlights.map((item) => (
                      <ListItem key={item} sx={{ px: 0 }}>
                        <CheckCircleIcon
                          sx={{ mr: 1, color: "secondary.main" }}
                        />
                        <Typography>{item}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </AnimatedInView>
          </Grid>
        </Grid>
      </Section>
    </Box>
  );
}

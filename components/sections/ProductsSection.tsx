import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import products from "@/data/products.json";
import Section from "@/components/ui/Section";
import AnimatedInView from "@/components/ui/AnimatedInView";

interface ProductsSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ProductsSection({
  title = "Our Products",
  subtitle = "Hydroponic produce designed for freshness, quality, and consistency.",
}: ProductsSectionProps) {
  return (
    <Section id="products" title={title} subtitle={subtitle}>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid key={product.id} size={{ xs: 12, md: 4 }}>
            <AnimatedInView delay={index * 0.06}>
              <Card sx={{ height: "100%" }}>
                <Box sx={{ position: "relative", height: 220 }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <CardContent>
                  <Chip
                    label={product.status}
                    color={
                      product.status === "Available" ? "success" : "default"
                    }
                    size="small"
                    sx={{ mb: 1.3 }}
                  />
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {product.description}
                  </Typography>
                  <Button
                    size="small"
                    variant="outlined"
                    component={Link}
                    href="/products"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </AnimatedInView>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

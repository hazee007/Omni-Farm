import Link from "next/link";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import products from "@/data/products.json";
import company from "@/data/company.json";
import { navLinks } from "@/utils/site";

const socialIcons = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
  X: FaXTwitter,
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ mt: 10, py: 8, bgcolor: "#0f172a", color: "white" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6">OmniFarmhouse</Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1.5, color: "rgba(255,255,255,0.78)" }}
            >
              Modern hydroponic farming built for healthier produce,
              sustainability, and scalable African food systems.
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1">Quick Links</Typography>
            <Stack spacing={0.6} sx={{ mt: 1.2 }}>
              {navLinks.map((link) => (
                <Typography
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: "rgba(255,255,255,0.82)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle1">Products</Typography>
            <Stack spacing={0.6} sx={{ mt: 1.2 }}>
              {products.map((product) => (
                <Typography
                  key={product.id}
                  sx={{ color: "rgba(255,255,255,0.82)" }}
                >
                  {product.name}
                </Typography>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1">Social</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              {company.socials.map((social) => {
                const Icon =
                  socialIcons[social.name as keyof typeof socialIcons];
                return (
                  <IconButton
                    key={social.name}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ color: "white" }}
                  >
                    <Icon />
                  </IconButton>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.78)" }}>
          © 2026 OmniFarmhouse Ltd. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

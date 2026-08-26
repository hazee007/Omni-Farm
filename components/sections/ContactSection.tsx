import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import company from "@/data/company.json";
import Section from "@/components/ui/Section";

const socialIcons = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
  X: FaXTwitter,
};

export default function ContactSection() {
  return (
    <Section
      id="contact"
      title="Contact Us"
      subtitle="Tell us what you need and our team will get back to you."
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h6" sx={{ mb: 1.5 }}>
            Contact Information
          </Typography>
          <Stack spacing={1.5}>
            <Typography>
              <strong>Phone:</strong> {company.contact.phone}
            </Typography>
            <Typography>
              <strong>Email:</strong> {company.contact.email}
            </Typography>
            <Typography>
              <strong>Address:</strong> {company.contact.address}
            </Typography>
            <Typography>
              <strong>Working Hours:</strong> {company.contact.workingHours}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
            {company.socials.map((social) => {
              const Icon = socialIcons[social.name as keyof typeof socialIcons];
              return (
                <Box
                  key={social.name}
                  component="a"
                  href={social.url}
                  aria-label={social.name}
                  sx={{ color: "text.primary" }}
                >
                  <Icon size={20} />
                </Box>
              );
            })}
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box component="form" noValidate>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField label="Name" required fullWidth />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField label="Email" type="email" required fullWidth />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField label="Phone" fullWidth />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField label="Subject" required fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Message"
                  multiline
                  rows={5}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}

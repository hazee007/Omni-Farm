import { Box, Container, Typography } from "@mui/material";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
  children: React.ReactNode;
}

export default function Section({
  id,
  title,
  subtitle,
  dark = false,
  children,
}: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: dark ? "#111827" : "transparent",
        color: dark ? "white" : "inherit",
      }}
    >
      <Container maxWidth="lg">
        {title ? (
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" } }}
            >
              {title}
            </Typography>
            {subtitle ? (
              <Typography
                variant="body1"
                sx={{
                  mt: 1.2,
                  maxWidth: 720,
                  color: dark ? "rgba(255,255,255,0.8)" : "text.secondary",
                }}
              >
                {subtitle}
              </Typography>
            ) : null}
          </Box>
        ) : null}
        {children}
      </Container>
    </Box>
  );
}

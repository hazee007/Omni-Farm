import Image from "next/image";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import company from "@/data/company.json";
import Section from "@/components/ui/Section";
import AnimatedInView from "@/components/ui/AnimatedInView";

export default function SustainabilitySection() {
  return (
    <Section
      id="sustainability"
      title="Sustainability"
      subtitle="Built for long-term food security and environmental responsibility."
    >
      <Grid container spacing={4} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AnimatedInView>
            <Box
              sx={{
                position: "relative",
                minHeight: { xs: 260, md: 360 },
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/sustainability.svg"
                alt="Sustainable hydroponic farming illustration"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </AnimatedInView>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AnimatedInView delay={0.08}>
            <List>
              {company.sustainabilityBenefits.map((item) => (
                <ListItem key={item} sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 34 }}>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={<Typography>{item}</Typography>} />
                </ListItem>
              ))}
            </List>
          </AnimatedInView>
        </Grid>
      </Grid>
    </Section>
  );
}

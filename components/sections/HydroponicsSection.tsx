import { Card, CardContent, Grid, Typography } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import ShieldIcon from "@mui/icons-material/Shield";
import BoltIcon from "@mui/icons-material/Bolt";
import Section from "@/components/ui/Section";
import AnimatedInView from "@/components/ui/AnimatedInView";
import company from "@/data/company.json";

const icons = [WaterDropIcon, LocalFloristIcon, ShieldIcon, BoltIcon];

export default function HydroponicsSection() {
  return (
    <Section id="why-hydroponics" title="Why Hydroponics?">
      <Grid container spacing={3}>
        {company.hydroponicBenefits.map((benefit, index) => {
          const Icon = icons[index];
          return (
            <Grid key={benefit.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <AnimatedInView delay={index * 0.05}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "transform .25s ease",
                    "&:hover": { transform: "translateY(-6px)" },
                  }}
                >
                  <CardContent>
                    <Icon color="primary" sx={{ fontSize: 34 }} />
                    <Typography variant="h6" sx={{ mt: 1.5, mb: 1.1 }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedInView>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}

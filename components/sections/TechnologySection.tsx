import { Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import ScienceIcon from "@mui/icons-material/Science";
import OpacityIcon from "@mui/icons-material/Opacity";
import RecyclingIcon from "@mui/icons-material/Recycling";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Section from "@/components/ui/Section";
import AnimatedInView from "@/components/ui/AnimatedInView";
import company from "@/data/company.json";

const icons = [
  MemoryIcon,
  ScienceIcon,
  OpacityIcon,
  RecyclingIcon,
  SolarPowerIcon,
  SmartToyIcon,
];

export default function TechnologySection() {
  return (
    <Section id="technology" title="Smart Farming Technology" dark>
      <Grid container spacing={3}>
        {company.technologyFeatures.map((item, index) => {
          const Icon = icons[index];
          return (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <AnimatedInView delay={index * 0.05}>
                <Card
                  sx={{
                    height: "100%",
                    bgcolor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <CardContent>
                    <Icon sx={{ color: "#81C784", fontSize: 34 }} />
                    <Typography
                      variant="h6"
                      sx={{ color: "white", mt: 1.2, mb: 0.8 }}
                    >
                      {item.title}
                    </Typography>
                    {item.comingSoon ? (
                      <Chip
                        label="Coming Soon"
                        size="small"
                        color="warning"
                        sx={{ mb: 1 }}
                      />
                    ) : null}
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.78)" }}
                    >
                      {item.description}
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

import { Card, CardContent, Grid, Typography } from "@mui/material";
import stats from "@/data/stats.json";
import Section from "@/components/ui/Section";
import StatCounter from "@/components/ui/StatCounter";
import AnimatedInView from "@/components/ui/AnimatedInView";

export default function StatsSection() {
  return (
    <Section id="stats">
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid key={stat.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <AnimatedInView delay={index * 0.05}>
              <Card sx={{ height: "100%", textAlign: "center" }}>
                <CardContent>
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </AnimatedInView>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

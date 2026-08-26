"use client";

import { useEffect, useMemo, useState } from "react";
import { Typography } from "@mui/material";

interface StatCounterProps {
  value: number;
  suffix?: string;
}

export default function StatCounter({ value, suffix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const duration = useMemo(() => 1100, []);

  useEffect(() => {
    const stepMs = 30;
    const steps = Math.max(Math.floor(duration / stepMs), 1);
    const increment = value / steps;
    let current = 0;

    const timer = window.setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        window.clearInterval(timer);
        return;
      }
      setCount(Math.floor(current));
    }, stepMs);

    return () => window.clearInterval(timer);
  }, [duration, value]);

  return (
    <Typography
      variant="h3"
      component="span"
      sx={{ fontSize: { xs: "2rem", md: "2.4rem" }, color: "primary.main" }}
    >
      {count.toLocaleString()}
      {suffix}
    </Typography>
  );
}

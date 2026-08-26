"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { GalleryItem } from "@/types";

interface GalleryLightboxProps {
  items: GalleryItem[];
}

export default function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid
            key={item.id}
            size={{ xs: 12, sm: 6, md: index % 3 === 0 ? 7 : 5 }}
          >
            <Box
              onClick={() => setActive(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setActive(item);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${item.title} image`}
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 3,
                cursor: "pointer",
                height: { xs: 240, md: index % 3 === 0 ? 340 : 280 },
                "& img": { transition: "transform 0.35s ease" },
                "&:hover img": { transform: "scale(1.05)" },
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: "auto 0 0 0",
                  p: 1.2,
                  background:
                    "linear-gradient(180deg, transparent, rgba(0,0,0,0.72))",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={Boolean(active)}
        onClose={() => setActive(null)}
        fullWidth
        maxWidth="md"
        aria-label="Gallery image preview"
      >
        <DialogContent sx={{ p: 0, bgcolor: "#0b0f19", position: "relative" }}>
          <IconButton
            onClick={() => setActive(null)}
            aria-label="Close image preview"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>
          {active ? (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 280, md: 560 },
              }}
            >
              <Image
                src={active.image}
                alt={active.alt}
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
              />
            </Box>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMemo, useState } from "react";
import { navLinks } from "@/utils/site";
import { useScrollState } from "@/hooks/useScrollState";

export default function Navbar() {
  const pathname = usePathname();
  const isScrolled = useScrollState(10);
  const [open, setOpen] = useState(false);
  const appBarSx = useMemo(
    () => ({
      bgcolor: isScrolled ? "rgba(255,255,255,0.92)" : "transparent",
      backdropFilter: isScrolled ? "blur(10px)" : "none",
      color: "text.primary",
      borderBottom: isScrolled
        ? "1px solid rgba(0,0,0,0.08)"
        : "1px solid transparent",
      transition: "all 0.25s ease",
    }),
    [isScrolled],
  );

  return (
    <AppBar position="sticky" elevation={0} sx={appBarSx}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", minHeight: 74 }}
        >
          <Typography
            component={Link}
            href="/"
            variant="h6"
            sx={{ color: "inherit", textDecoration: "none", fontWeight: 700 }}
          >
            OmniFarmhouse
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.href}
                component={Link}
                href={link.href}
                color={pathname === link.href ? "primary" : "inherit"}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={1.2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Button variant="outlined" component={Link} href="/about">
              Learn More
            </Button>
            <Button variant="contained" component={Link} href="/contact">
              Order Now
            </Button>
          </Stack>

          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 280, p: 2 }}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Stack spacing={1.5} sx={{ mt: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                component={Link}
                href={link.href}
                onClick={() => setOpen(false)}
                color={pathname === link.href ? "primary" : "inherit"}
                aria-current={pathname === link.href ? "page" : undefined}
                sx={{ justifyContent: "flex-start" }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="outlined"
              component={Link}
              href="/about"
              onClick={() => setOpen(false)}
            >
              Learn More
            </Button>
            <Button
              variant="contained"
              component={Link}
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Order Now
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}

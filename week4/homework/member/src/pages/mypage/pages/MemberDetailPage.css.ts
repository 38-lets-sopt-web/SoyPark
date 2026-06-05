import { vars } from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "5rem",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginTop: "4rem",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "40rem",
  gap: "1.5rem",
});

export const btn = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: vars.color.blue,
  alignSelf: "flex-start",

  selectors: {
    "&:hover": {
      color: vars.color.navy,
    },
  },
});

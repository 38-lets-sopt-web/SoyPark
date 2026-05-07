import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  alignItems: "center",
  justifyContent: "center",
  width: "70%",
});

export const btnContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.3rem",
  alignItems: "center",
  justifyContent: "center",
  width: "70%",
  marginTop: "2rem",
});

export const btn = style({
  color: vars.color.blue,
  fontSize: "1.3rem",
  fontWeight: "bold",

  selectors: {
    "&:hover": {
      textDecoration: "underline",
      color: vars.color.navy,
    },
  },
});

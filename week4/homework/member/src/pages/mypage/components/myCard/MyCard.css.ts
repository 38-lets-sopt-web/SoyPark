import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "3rem",
  backgroundColor: vars.color.white,
  borderRadius: "8px",
  width: "100%",
});

export const container = style({
  display: "flex",
  justifyContent: "space-between",
});

export const title = style({
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: vars.color.navy,
});

export const content = style({
  fontSize: "1.5rem",
  color: vars.color.gray,
});

import { vars } from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginTop: "4rem",
});

export const searchSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  alignItems: "center",
  justifyContent: "center",
  width: "70%",
});

export const result = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  alignSelf: "flex-start",
  justifyContent: "center",
  width: "100%",
});

export const headingText = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
});

export const resultContent = style({
  display: "flex",
  backgroundColor: vars.color.white,
  width: "100%",
  borderRadius: "8px",
  padding: "1rem",
});

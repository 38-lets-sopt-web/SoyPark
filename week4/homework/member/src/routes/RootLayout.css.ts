import { style } from "@vanilla-extract/css";

export const wrapper = style({
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const container = style({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

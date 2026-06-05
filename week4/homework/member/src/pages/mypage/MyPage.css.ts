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

export const editArea = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
  width: "80%",
});

export const cardContainer = style({
  width: "80%",
});

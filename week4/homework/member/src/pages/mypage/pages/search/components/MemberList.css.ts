import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  width: "100%",
  alignSelf: "flex-start",
  padding: "3rem",
});

export const title = style({
  fontSize: "1.9rem",
  fontWeight: "bold",
});

export const cardContainer = style({
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
});

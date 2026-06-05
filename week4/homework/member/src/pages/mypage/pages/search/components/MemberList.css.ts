import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  width: "100%",
  padding: "3rem",
  alignItems: "center",
});

export const title = style({
  fontSize: "1.9rem",
  fontWeight: "bold",
  alignSelf: "flex-start",
});

export const cardContainer = style({
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
});

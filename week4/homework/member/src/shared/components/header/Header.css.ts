import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const HeaderContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem",
  gap: "1rem",
  width: "100%",
  backgroundColor: vars.color.navy,
  color: vars.color.white,
});

export const LeftText = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1rem",
});

export const RightText = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1rem",
});

export const headerText = style({
  fontSize: "2rem",
  fontWeight: "bold",
});

export const btnText = style({
  fontSize: "1.5rem",
  fontWeight: "bold",

  selectors: {
    "&:hover": {
      color: vars.color.lightBlue,
      cursor: "pointer",
    },
  },
});

export const pText = style({
  fontSize: "1.2rem",
});

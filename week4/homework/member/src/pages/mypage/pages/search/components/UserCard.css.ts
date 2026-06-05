import { vars } from "@styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "2rem",
  backgroundColor: vars.color.white,
  borderRadius: "8px",
  width: "18rem",
  justifyContent: "center",
  alignItems: "center",
  whiteSpace: "nowrap",
  transition: "transform 0.3s ease-in-out",

  selectors: {
    "&:hover": {
      transform: "scale(0.96)",
    },
  },
});

export const content = styleVariants({
  default: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: vars.color.navy,
  },
  box: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: vars.color.navy,
    backgroundColor: vars.color.lightBlue,
    padding: "0.8rem",
    borderRadius: "5px",
  },
});

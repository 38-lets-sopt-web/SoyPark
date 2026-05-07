import { recipe } from "@vanilla-extract/recipes";
import { vars } from "@styles/theme.css";

export const button = recipe({
  base: {
    alignItems: "center",
    gap: "0.8rem",
    border: "none",
    borderRadius: "8px",
    padding: "0.5rem 0",
    height: "2.8rem",
    backgroundColor: vars.color.blue,
    color: vars.color.white,
    width: "100%",
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
  variants: {
    state: {
      active: {
        ":hover": {
          backgroundColor: vars.color.navy,
        },
      },
      disabled: {
        backgroundColor: vars.color.gray,
        cursor: "not-allowed",
        color: vars.color.white,
      },
    },
  },
  defaultVariants: {
    state: "active",
  },
});

import { recipe } from "@vanilla-extract/recipes";
import { vars } from "@styles/theme.css";

export const button = recipe({
  base: {
    alignItems: "center",
    gap: "0.8rem",
    border: "none",
    borderRadius: "999px",
    padding: "0rem 1.2rem",
    height: "2.8rem",
  },
  variants: {
    state: {
      active: {
        backgroundColor: vars.color.blue,
        ":active": {
          backgroundColor: vars.color.lightBlue,
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

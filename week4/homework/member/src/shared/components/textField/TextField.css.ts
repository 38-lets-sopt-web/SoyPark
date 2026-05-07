import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  width: "100%",
});

export const label = style({
  fontSize: "1.3rem",
  fontWeight: "bold",
});

export const inputWrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const input = style({
  width: "100%",
  fontSize: "1.3rem",
  padding: "1rem",
  paddingRight: "3rem",
  borderRadius: "8px",
  border: `1px solid ${vars.color.gray}`,
  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: vars.color.blue,
    },
  },
});

export const iconBtn = style({
  position: "absolute",
  right: "1rem",
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  color: vars.color.gray,
  fontSize: "1.2rem",
});

export const errorMessage = style({
  fontSize: "1.3rem",
  color: vars.color.red,
  marginTop: "0.2rem",
});

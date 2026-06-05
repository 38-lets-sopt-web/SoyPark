import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    red: "#FF0000",
    gray: "#828282",
    black: "#222222",
    white: "#F9F7F7",
    lightBlue: "#DBE2EF",
    blue: "#3F72AF",
    navy: "#112D4E",
  },
});

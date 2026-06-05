import { vars } from "@styles/theme.css";
import "./reset.css.ts";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  height: "100%",
  minHeight: "100vh",
});

globalStyle("body", {
  margin: 0,
  fontFamily: "sans-serif",
  background: vars.color.lightBlue,
  color: "#222",
});

globalStyle("main", {
  width: "100%",
});

globalStyle("button", {
  all: "unset",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

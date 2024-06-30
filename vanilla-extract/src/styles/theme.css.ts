import { createGlobalTheme } from "@vanilla-extract/css";

export const lightTheme = createGlobalTheme(":root", {
  color: {
    black100: "#0F1010",
    black60: "#2C2D2E",
    black40: "#3C3D40",
    gray80: "#808388",
    gray60: "#989BA0",
    gray40: "#C0C5C9",
    gray20: "#EEEFF1",
    gray10: "#F7F8FA",
    white100: "#FFFFFF",
  },
});

export const darkTheme = createGlobalTheme(":root", {
  color: {
    black100: "#e6e6e6",
    black60: "#F7F8FA",
    black40: "#EEEFF1",
    gray80: "#b9bbc5",
    gray60: "#8e8f97",
    gray40: "#626368",
    gray20: "#3C3D40",
    gray10: "#2C2D2E",
    white100: "#232326",
  },
});

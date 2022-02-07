import { Theme } from "./types/types";

export const lightTheme: Theme = {
  infoBackground: "white",
  button: "flex-start",
  textColor: "#19202D",
  background: "#F4F6F8",
  filterIconFill: "#6E8098",
  modalText: "black",
  checkboxColor: "rgba(25, 32, 45, 0.1)",
};
export const darkTheme: Theme = {
  infoBackground: "var(--near-black)",
  button: "flex-end",
  textColor: "#FFFFFF",
  background: "#121721",
  filterIconFill: "#FFFFFF",
  modalText: "white",
  checkboxColor: "rgba(255, 255, 255, 0.1)",
};

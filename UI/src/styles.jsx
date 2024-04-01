import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  button: {
    color: "#4b51b7",
    alignItems: "center",
    borderColor: "#4a86c7",
    borderRadius: 8,
  },
  base: {
    width: {
      default: 800,
      "@media (max-width: 800px)": "100%",
      "@media (min-width: 1540px)": 1366,
    },
  },
  img: {
    width: 29,
    height: "auto",
  },
});

export default styles;

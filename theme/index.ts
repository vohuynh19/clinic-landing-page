import GlobalStyled from "./styled";

const themes = {
  colors: {
    primary: "#35BFBF",
    highlightPrimary: "#1e6f80",

    black: "#000000",
    highlightBlack: "#11100E",

    white: "#ffffff",
    highlightWhite: "#FEFDFC",

    greyBg: "#abbbc8",

    whiteBg: "#fff",

    yellowBg: "#FFE178",
    lightYellow: "#F8E7AB",
  },
};

const px2vw = (px: number) => `${px * 0.052083333333333336}vw`;

export { px2vw, themes, GlobalStyled };

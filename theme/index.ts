import GlobalStyled from "./styled";

const themes = {
  colors: {
    primary: "#FCB500",
    lightPrimary: "#8E6700",
    background: "#000000",
    text: "#ffffff",
    secondaryText: "#BDBDBD",
    lightText: "#828282",
    disabledText: "#4F4F4F",
    textBoxBackground: "#252525",
    textBoxLightBg: "rgba(37, 37, 37, 0.59)",
    border: "#636363",
    textFormBorder: "#4F4F4F",
    textFormBg: "rgba(79, 79, 79, 0.24)",
    textFormActiveBg: "rgba(0, 0, 0, 0.88)",
  },
  fontSizes: {
    sm: "13px",
    sm1: "14px",
    sm2: "16px",
    md: "18px",
    md1: "20px",
    lg: "36px",
    lg1: "55px",
    borderRadius: "25px",
  },
};

const px2vw = (px: number) => `${px * 0.052083333333333336}vw`;

export { px2vw, themes, GlobalStyled };

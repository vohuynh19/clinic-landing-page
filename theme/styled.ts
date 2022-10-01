import { createGlobalStyle } from "styled-components";

type GlobalStyleType = {
  theme: any;
};

export default createGlobalStyle<GlobalStyleType>`
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background:transparent;
    
  }

  ::-webkit-scrollbar
  {
    width: 8px;
    background-color: #F5F5F5;
   
  }

  ::-webkit-scrollbar-thumb
  {
    border-radius: 4px;
    background-color:${({ theme }) => theme.colors.background};
    border:1px solid ${({ theme }) => theme.colors.border};
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
  }

  .highlightFont{
    font-family: 'Arapey', serif;
  }
`;

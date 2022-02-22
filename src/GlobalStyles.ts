import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    border: 0;
  }
  
  body{
    height: 100vh;
    background-image: url("https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg");
    background-size: 100% ;
  }
`;

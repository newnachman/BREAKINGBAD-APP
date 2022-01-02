import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

body {
  color: #3a3838;
  margin: 0;
  font-family: 'Mulish', sans-serif;
}

* {
  box-sizing: border-box;
}

a, a:hover, a:visited {
    text-decoration: none;
    color: inherit;
}

.scroll-top-wrp {
  position: fixed;
  padding: 5px;
  transition: all 0.5s;
  width: 70px;
  height: 63px;
  background-color: #ffffffb8;
  box-shadow: 2px 2px 18px 0px rgb(0 0 0 / 16%), 0px -4px 7px 0px rgb(12 12 12 / 92%);
  bottom: 15px;
  left: 15px;
  z-index: 1000;
  opacity: 1;
  cursor: pointer;
}

.scroll-top-wrp:hover {
  box-shadow: none;
  transform: scale(0.9);
}

.hide-smooth {
  opacity: 0;
  height: 15px;
}

.scroll-top {
  padding: 7px 2px;
  color: white;
  text-align: center;
  background-color: #383838;
}

`;
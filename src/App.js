import React from "react";
import { createGlobalStyle } from "styled-components";
import { NavBar } from './Components/NavBar'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
    background-color: #f0f0f0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0;
    font-family: Pacifico, sans-serif;
  }
  
  p {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
    </>
  );
}

export default App;

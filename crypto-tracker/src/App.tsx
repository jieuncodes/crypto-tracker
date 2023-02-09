import reset from "styled-reset";
import { ReactQueryDevtools } from "react-query/devtools";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import Router from "./Router";
import { isLightAtom } from "./atoms";
import { lightTheme, darkTheme } from "./theme";
import Logo from "./components/Logo";
import { Contents, Body } from "./styles/BigGrid";
import ThemeToggleBtn from "./components/ThemeToggleBtn";
import HomeLink from "./components/HomeLink";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Rubik', sans-serif;
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
    line-height: 1.2;
  }
  a {
    text-decoration:none;
    color:inherit;
  }`;

function App() {
  const [isLight, setIsLightAtom] = useRecoilState(isLightAtom);

  return (
    <BrowserRouter>
      <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Contents>
          <Header />            
          <Body>
            <Router />
          </Body>
        </Contents>

        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

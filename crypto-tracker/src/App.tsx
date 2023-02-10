import reset from "styled-reset";
import { ReactQueryDevtools } from "react-query/devtools";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useRecoilState } from "recoil";
import Router from "./Router";
import { lightAtom } from "./atoms";
import { lightTheme, darkTheme } from "./theme";
import { Contents, Body } from "./styles/BigGrid";
import { BrowserRouter, HashRouter } from "react-router-dom";
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
  const light = useRecoilState(lightAtom);

  let theme =
    localStorage.getItem("SAVED_THEME") == "darkTheme" ? darkTheme : lightTheme;

  return (
    <HashRouter>
      <ThemeProvider theme={theme ? theme : light ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Contents>
          <Header />
          <Body>
            <Router />
          </Body>
        </Contents>

        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
